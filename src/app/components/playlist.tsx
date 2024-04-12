import { getSelectedPlaylist, setSelectedPlaylist } from "@/store/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

export default function Playlist(props: any) {
  const selectedPlaylist = useAppSelector(
    (state) => state.auth.selectedPlaylist
  );
  const dispatch = useAppDispatch();
  const [playlist, setPlaylist] = useState<any>([]);
  const getSelectedPlayList = async () => {
    try {
      const response = await dispatch(getSelectedPlaylist(selectedPlaylist));
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


return (
    <div className="flex">
        <div>
            {playlist && (
                <div className="flex flex-col  px-3 py-2 ">
                   <div className="flex flex-row mt-16 gap-4  items-end"> 
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
    </div>
);
}
