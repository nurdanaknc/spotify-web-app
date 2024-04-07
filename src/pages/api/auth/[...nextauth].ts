import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import SpotifyProvider from "next-auth/providers/spotify";
import { pages } from "next/dist/build/templates/app-page";
import { LOGIN_URL } from "@/spotify.js";

export const authOptions = {
  // Configure one or more authentication providers
  secret : process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: '/login',
   // signOut: '/auth/signout',
  },
  providers: [
    SpotifyProvider({
        clientId: process.env.SPOTIFY_CLIENT_ID!, // (!) is a non-null assertion operator
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET!, 
        authorization: LOGIN_URL,
      })
  ],
  callbacks: {
    // STEP - 2 ve STEP - 3. Gelen user bilgileri jwt token a çevirlmeden önce obje tekrar customize ediliyor ardından jwt token a dönüştürülüyor.
    // Dönüştürüldükten sonra STEP - 3 olarak tetikleniyor.
    async jwt(jwtProps: any) {
      const { token, user } = jwtProps;
      
      if (user?.data) {
        token.accessToken = user.data;
        //localStorage.setItem("accessToken", token.accessToken || "");
       // console.log(user, "user blb")
      }
      //console.log(jwtProps, "jwtProps");
      //console.log(token.accessToken, "token access token 5" )
      return token;
    },
    // STEP - 4. Decode edilen token içerisindeki accessToken eklenerek session objesi clint a gönderiliyor.
    async session(sessionProps: any) {
      const { session, token } = sessionProps;
      session.accessToken = token.accessToken;

      console.log(session, "session");
      //console.log(sessionProps, "sessionProps blb");
      return session;
    },

  
  },
};

export default NextAuth(authOptions)