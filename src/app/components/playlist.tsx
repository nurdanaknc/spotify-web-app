import { getSelectedPlaylist, startOrResumePlayback, getCurrentlyPlaying, setSelectedTrackMs, setPlayingTrackMs, setSelectedTrack } from "@/store/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import Vibrant from "node-vibrant";
import { useWindowSize } from "@/helpers/helpers";
import { type } from "os";

export default function Playlist(props: any) {
  const selectedPlaylist = useAppSelector(
    (state) => state.auth.selectedPlaylist
  );
  const window = useWindowSize();
  const deviceId = useAppSelector((state) => state.auth.deviceId);
  const [gradient, setGradient] = useState<string>(``);
  const bg = `bg-[#1e1e1e]`;
  const dispatch = useAppDispatch();
  const [playlist, setPlaylist] = useState<any>([]);
  const [playtime, setPlaytime] = useState<string>("");
  const [isPlay, setIsPlay] = useState<boolean>(true);

  const darkenColor = (color: any, darkenAmount: any) => {
    // Renk bileşenlerini ayırma
    const red = parseInt(color.slice(1, 3), 16);
    const green = parseInt(color.slice(3, 5), 16);
    const blue = parseInt(color.slice(5, 7), 16);

    // Her bir renk bileşenine bir miktar koyuluk ekleme
    const newRed = Math.max(0, red - darkenAmount);
    const newGreen = Math.max(0, green - darkenAmount);
    const newBlue = Math.max(0, blue - darkenAmount);

    // Yeni renk oluşturma
    return `#${newRed.toString(16).padStart(2, '0')}${newGreen.toString(16).padStart(2, '0')}${newBlue.toString(16).padStart(2, '0')}`;
  };


  const getSelectedPlayList = async () => {
    try {
      const response = await dispatch(getSelectedPlaylist(selectedPlaylist));
      const vibrant = new Vibrant(response.payload.images[0].url).getPalette();
      vibrant.then((palette) => {
        console.log(palette, "palette");
        const grad = `linear-gradient(to bottom, ${darkenColor(palette.LightVibrant?.hex, 100)},${darkenColor(palette.LightVibrant?.hex, 99000000)}, ${darkenColor(palette.LightVibrant?.hex, 99999999)})`;
        setGradient(grad);
      });

      console.log(response, "selectedPlaylist")
      setPlaylist(response.payload);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getSelectedPlayList();
    console.log(playlist, "playlist");
  }, [selectedPlaylist]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const response = dispatch(getCurrentlyPlaying());
      response.then((response) => {
        dispatch(setSelectedTrack(response.payload.item));
        dispatch(setPlayingTrackMs(response.payload.progress_ms));
      });
    
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  

  useEffect(() => {
    console.log(gradient, "gradient")
  }
    , [gradient])




  return (
    <div className={`flex flex-col gap-8 rounded-xl  `} style={{ background: gradient, height:window.height-105 }}>
      <div>
        {playlist && (
          <div className={`flex flex-col  px-3 py-2 `} >
            <div className="flex flex-row mt-16 gap-4  items-end ">
              {playlist.images && playlist.images[0] && <img src={playlist.images[0].url} alt="playlist" className=" rounded w-44 h-44 shadow-black shadow-2xl drop-shadow-xl" />}
              <div className="flex flex-col gap-4">
                <span className=" text-xs text-gray-500">
                  {playlist.type?.charAt(0).toUpperCase() + playlist.type?.slice(1)}
                </span>
                <span className={`font-bold text-6xl ${playlist.name && playlist.name.length > 25 ? ' text-3xl' : ''}`}>  {playlist.name?.charAt(0).toUpperCase() + playlist.name?.slice(1)}</span>
                <span className="text-sm font-semibold text-gray-500">
                  {playlist.owner?.display_name} &bull; {playlist.tracks?.total} songs &bull; {playtime}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-grey6 bg-transparent rounded-b-xl  backdrop-blur-3xl bg-opacity-20 p-3 " style={{ height:window.height-220}}>
        <div className="grid grid-cols-9 px-5 gap-1 pb-2 border-b border-b-[#b4b4b428] border-opacity-25 ">
          <span className="flex flex-row  gap-3 ml-2 col-span-5">
            <span className="">#</span>
            <span className="">Title</span>
          </span>
          <span className="col-span-3">Album</span>
          <span className="col-span-1">Time</span>
        </div>
      
        {playlist.tracks?.items && (
          <div className="">
          <ol className="mt-8  overflow-y-scroll flex flex-col  gap-1" style={{ maxHeight:window.height-480}}>
            {playlist.tracks.items.map((track: any, index: number) => (
              <li key={index} className="" >
                <div className="grid grid-cols-9 gap-3 px-5 items-center w-full cursor-pointer rounded-md p-2 hover:bg-grey4 hover:bg-opacity-20 hover:text-white"
                  onClick={() => {setIsPlay(!isPlay);dispatch(setSelectedTrackMs(track?.track?.duration_ms));dispatch(startOrResumePlayback({ deviceId: deviceId,  trackUri: [track?.track?.uri], action: isPlay? "play": "pause" }))}} >
                  
                  <div className="col-span-5">
                    <div className="flex flex-row gap-2">
                    <span className="flex items-center text-center ">{index + 1}</span>
                      <img
                        src={track?.track.album.images[0].url}
                        alt="album"
                        className="w-12 h-12 rounded "
                      />
                      <div className="flex flex-col ">
                        <span className="truncate">{track?.track.name}</span>
                        <span className=" text-grey4 truncate">
                          {track?.track.artists.map((artist: any) => artist.name).join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 truncate">
                    {track?.track.album.name}
                  </div>
                  <div className="col-span-1">
                    {new Date(track?.track.duration_ms).toISOString().substr(14, 5)}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          </div>
        )}
        </div>
      
    </div>
  );
}
