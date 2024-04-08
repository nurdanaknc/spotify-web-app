import React from 'react';
import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import { LOGIN_URL } from '@/spotify';
import { useDispatch as _useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { fetchToken } from '@/store/auth';
const useDispatch = () => _useDispatch<AppDispatch>();
import dotenv from 'dotenv';





export default function Login() {
    dotenv.config({path: '.env'});
    useEffect(() => {
        
        console.log(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID)
    }
    , []);   
    const dispatch = useDispatch();
    return (
        <main>
        <h1>Login</h1>
        <button   onClick={() => signIn('spotify', {
            redirect: true,
            callbackUrl: `/playlist`,
        })} >Login with Spotify - NextAuth</button>
        <br />
        <button  onClick={() => dispatch(fetchToken())  } >Login With Spotify - Store</button>
   
       <br />
      
        </main>
    );
    }
