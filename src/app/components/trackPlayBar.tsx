import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { seekToPosition, pausePlayback } from "@/store/auth";
import React, { use, useEffect } from "react";
import { useState } from 'react';
import PlayIcon from "./icons/playIcon";
import ForwardIcon from "./icons/forwardIcon";
import BackwardIcon from "./icons/backwardIcon";
import PauseIcon from "./icons/pauseIcon";
export default function TrackPlayBar() {
   const dispatch = useAppDispatch();

   const selectedTrackMs = useAppSelector((state) => state.auth.selectedTrackMs);
   const playingTrackMs = useAppSelector((state) => state.auth.playingTrackMs);
   const selectedTrack = useAppSelector((state) => state.auth.selectedTrack);
   const [progress, setProgress] = useState(selectedTrackMs);

   const handleClick = (e: any) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newProgress = (x / rect.width) * selectedTrackMs;
      console.log(newProgress, "newProgress", selectedTrackMs, "selectedTrackMs")
      dispatch(seekToPosition(parseInt(newProgress.toString())));
   }

   const playingAction = () => {
      let newProgress = (playingTrackMs / selectedTrackMs) * 100;
      newProgress = Math.max(0, Math.min(100, newProgress));
      setProgress(newProgress);
   };

   useEffect(() => {
      playingAction();
   }, [playingTrackMs]);

   return (
      <div className=" fixed bottom-0 w-full">
         <div className="grid grid-cols-10 items-center justify-between px-4 py-2 bg-[#080707]">
            <div className=" col-span-2 flex items-center space-x-4">
               <img
                  src={selectedTrack?.album.images[2].url}
                  alt=""
                  className="w-16 h-16 rounded-md"
               />
               <div>
                  <h1 className="text-white">{selectedTrack?.name}</h1>
                  <p className="text-gray-400">{selectedTrack?.artists[0].name}</p>
               </div>
            </div>


            <div className="col-span-8 flex flex-col  items-center">
               <div className="flex flex-row items-center justify-center gap-3">
                  <BackwardIcon size="15" />
                  <PlayIcon size="23" />
                  <ForwardIcon size="15" />
               </div>
               <div className="  flex flex-row items-center justify-center gap-3">
                  <div>{new Date(playingTrackMs).toISOString().substr(14, 5)} </div>
                  <div className="w-[400px] progress-bar-bg bg-grey6 rounded-full h-1 cursor-pointer " onClick={handleClick}>
                     <div className="progress-bar-progress bg-white  h-1 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div>{new Date(selectedTrackMs).toISOString().substr(14, 5)} </div>
               </div>
            </div>

         </div>
      </div>
   );
}
