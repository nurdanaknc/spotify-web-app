import NextAuth, { AuthOptions } from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL } from "@/spotify.js";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  secret : process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60, // 1 saat,
    
  },
  jwt: {
    maxAge: 1 * 60 * 60, // 1 saat,

     
  
  },
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
        const {token} = jwtProps;
        console.log("fsdfds")
  
        return token
      
    },
    // STEP - 4. Decode edilen token içerisindeki accessToken eklenerek session objesi clint a gönderiliyor.
    async session(sessionProps: any) {
      const { session, token } = sessionProps;
      session.accessToken = token.accessToken;

      
      console.log(sessionProps, "sessionProps blb");
      return session;
    },

  
  },
};

export default NextAuth(authOptions)