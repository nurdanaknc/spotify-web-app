import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { fetchToken } from "@/store/auth";
import { get } from "http";
import { useDispatch as _useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
const useDispatch = () => _useDispatch<AppDispatch>();
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

  
export default function Playlist() {
  const router = useRouter();

useEffect(() => {
//  router.push("/login");
}
, []);
  const dispatch = useDispatch();
  return (
   <>
      <h1>YOUR PLAYLIST</h1>
      <button onClick={() => signOut({
            redirect: true,
            callbackUrl: `/login`,
       })  } >Logout</button>
   </>
  );
}
