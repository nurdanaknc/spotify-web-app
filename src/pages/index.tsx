import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { fetchToken } from "@/store/auth";
import { get } from "http";
import { useDispatch as _useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
const useDispatch = () => _useDispatch<AppDispatch>();
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

  


export default function Home() {
  const router = useRouter();

useEffect(() => {
//  router.push("/login");
}
, []);
  const dispatch = useDispatch();
  return (
   <main>
      <h1>Hello, World!</h1>
   </main>
  );
}
