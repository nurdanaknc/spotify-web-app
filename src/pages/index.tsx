import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { fetchToken, getFollowedArtists } from "@/store/auth";
import { get } from "http";
import { useDispatch as _useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
const useDispatch = () => _useDispatch<AppDispatch>();
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Sidebar from "@/app/components/UI/sidebar";
import Button from "@/app/components/UI/button";


const inter = Inter({ subsets: ["latin"] });

  


export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const getFollowedArtistsFunction = async () => {
    try {
      const response  = await dispatch(getFollowedArtists());
      console.log(localStorage.getItem("accessToken"));
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  }

useEffect(() => {
//  router.push("/login");
  getFollowedArtistsFunction();

}
, []);
  
  return (
    <div className="p-3 flex flex-row gap-2">
        <Sidebar />
      <div className="flex flex-col gap-3">
        Followed Artists
        <ol>
          <li>Artist 1</li>
        </ol>
      </div>
      <Button type='textButton' onClick={() => signOut()}>Logout</Button>
    </div>
  );
}
