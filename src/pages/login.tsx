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
import Button from '@/app/components/UI/button';
import Pills from '@/app/components/UI/pills';
import Dropdown from '@/app/components/UI/dropdown';
import Navbar from '@/app/components/UI/navbar';

const questionMark = [
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
    </svg>
];

export default function Login() {


    const dispatch = useDispatch();
    return (
        <div className='flex flex-col h-screen w-screen justify-center items-center'>
            <Navbar />
            <div className='flex flex-col text-center justify-around rounded-xl w-fit h-[70%] gap-20  px-20 py-28 bg-black '>
                <div className='flex flex-col gap-7 items-center text-center justify-center'>
                <img src='/img/spotifyIcon.svg' className='w-20 h-20 flex items-center' />
                <span className='text-white text-4xl'>Spotify Web App Project</span>
                <span className='text-white text-md'>Authanticate with your Spotify account</span>
     
                </div>
                <Button type='primary' onClick={() => signIn('spotify', {
                    redirect: true,
                    callbackUrl: `/playlist`,
                })} >Login With Spotify</Button>
            


            </div>
            <span className='absolute bottom-3 text-primaryWhite text-xs'>@clientdevcodes</span>
        </div>
    );
}
