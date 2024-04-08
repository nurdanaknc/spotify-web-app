/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';

dotenv.config({path: '.env'});
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    NEXT_PUBLIC_NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
  }
};

export default nextConfig;
