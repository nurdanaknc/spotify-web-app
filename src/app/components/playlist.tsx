import { getSelectedPlaylist, startOrResumePlayback } from "@/store/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import Vibrant from "node-vibrant";
import { type } from "os";

export default function Playlist(props: any) {
  const selectedPlaylist = useAppSelector(
    (state) => state.auth.selectedPlaylist
  );
  const deviceId = useAppSelector((state) => state.auth.deviceId);
  const [gradient, setGradient] = useState<string>(``);
  const bg = `bg-[#1e1e1e]`;
  const dispatch = useAppDispatch();
  const [playlist, setPlaylist] = useState<any>([]);


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
    console.log(gradient, "gradient")
  }
    , [gradient])


  return (
    <div className={`flex flex-col gap-8 w-screen rounded-2xl`} style={{ background: gradient }}>
      <div>
        {playlist && (
          <div className={`flex flex-col  px-3 py-2 `} >
            <div className="flex flex-row mt-16 gap-4  items-end ">
              {playlist.images && playlist.images[0] && <img src={playlist.images[0].url} alt="playlist" className=" rounded w-44 h-44 shadow-black shadow-2xl drop-shadow-xl" />}
              <div className="flex flex-col gap-4">
                <span className=" text-xs text-gray-500">
                  {playlist.type?.charAt(0).toUpperCase() + playlist.type?.slice(1)}
                </span>
                <span className="font-bold text-6xl">  {playlist.name?.charAt(0).toUpperCase() + playlist.name?.slice(1)}</span>
                <span className="text-sm font-semibold text-gray-500">
                  {playlist.owner?.display_name} &bull; {playlist.tracks?.total} songs
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" bg-grey6 bg-transparent backdrop-blur-3xl  h-full bg-opacity-20 p-3">
        {playlist.tracks?.items && (
          <ol className="mt-8 flex  flex-col  gap-2">
            {playlist.tracks.items.map((track: any, index: number) => (
              <li key={index} className="flex ">
                <div className="flex flex-row gap-4 items-center w-full cursor-pointer rounded-md p-2 hover:bg-grey4 hover:bg-opacity-20 hover:text-white"
                onClick={()=> dispatch(startOrResumePlayback({deviceId: deviceId, albumUri:track?.track?.album?.uri,trackUri: track?.track?.uri, action:"play"})) } >
                  <span >{index + 1}</span>
                  <img
                    src={track?.track.album.images[0].url}
                    alt="album"
                    className="w-12 h-12 rounded"
                  />
                  <div className="flex flex-col">
                    <span>{track?.track.name}</span>
                    <span className=" text-grey4">
                      {track?.track.artists.map((artist: any) => artist.name).join(", ")}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
