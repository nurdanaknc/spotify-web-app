import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { getDevices, getFollowedArtists, setDeviceId } from "@/store/auth";
import { get } from "http";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Sidebar from "@/app/components/sidebar";
import Button from "@/app/components/UI/button";
import { start } from "repl";
import { startOrResumePlayback } from "@/store/auth";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Playlist from "@/app/components/playlist";


const inter = Inter({ subsets: ["latin"] });

  
export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const deviceId = useSelector((state: RootState) => state.auth.deviceId);

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
const getDevicesFunction = async () => {
  try {
    const response = await dispatch(getDevices()).then(
      (response) => {
        dispatch(setDeviceId((response as any).payload.data.devices[0].id));
        return response;
      }
    )
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}

useEffect(() => {
//  router.push("/login");
  getFollowedArtistsFunction();
  getDevicesFunction();
  console.log(deviceId, "deviceId");
}
, []);

useEffect(() => {
  console.log(deviceId, "deviceId");
}
, [deviceId]);
  
  return (
    <div className="p-3 flex flex-row gap-2 ">
        <Sidebar />
        <Playlist />
    
 
      <Button type='textButton' onClick={() => signOut()} className=" fixed top-2 right-3">Logout</Button>

      
      
        
     

    </div>
  );
}
