import React from 'react';
import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import { LOGIN_URL } from '@/spotify';



export default function Login() {
    return (
        <main>
        <h1>Login</h1>
        <button   onClick={() => signIn('spotify')} >Login with Spotify - NextAuth</button>
        <br />
       
        </main>
    );
    }
