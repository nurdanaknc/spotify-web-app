import NextAuth, { NextAuthOptions, Session } from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL } from "@/spotify.js";
import axios from "axios";
const SPOTIFY_REFRESH_TOKEN_URL = 'https://accounts.spotify.com/api/token'
const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET

import { DefaultSession, Account } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { access } from "fs";
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

// Extend the Session interface from next-auth
declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string
    error?: string
  }
}

// Extend the Account interface from next-auth
declare module 'next-auth' {
  interface Account {
    expires_at: number
  }
}

// Extend the JWT interface from next-auth/jwt
declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
    refreshToken?: string
    accessTokenExpires?: number
    error?: string
    user?: Session['user']
  }
}

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      'base64'
    )
    const { data } = await axios.post(
      SPOTIFY_REFRESH_TOKEN_URL,
      {
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken,
      },
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    return {
      ...token,
      accessToken: data.access_token,
      accessTokenExpires: Date.now() + data.expires_in * 1000,
    }
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!,
      authorization: LOGIN_URL,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60, // 1 saat
  },
  callbacks: {
    async signIn({user, account, profile}) {
      //console.log(user, "user")
      return true
    },
    async jwt({ token, account, user }) {
      try{
      if (account && user) {
       // console.log(account.access_token, "account.access_token")
        
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at *  1000,
          user,
        }
      }
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token
      }
      const newToken = await refreshAccessToken(token)
      return newToken
    } catch (error) {
      // console.log("error", error)
      return {
        ...token,
        error: 'RefreshAccessTokenError',
      }
    }
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.error = token.error
      session.user = token.user
      // console.log(session)
      
      return session
     
    },
  },
}

export default NextAuth(authOptions)