export { default } from "next-auth/middleware";

import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next"

export async function middleware(req: any, res: any, authOptions: any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;


  
  

 

 
}

export const config = {
    matcher: ["/"],
    exclude: ["/login"],
  };
  