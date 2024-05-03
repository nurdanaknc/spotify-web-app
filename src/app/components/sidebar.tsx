import React, { use, useEffect, useState } from "react";
import HomeIcon from "./icons/homeIcon";
import SearchIcon from "./icons/searchIcon";
import FolderIcon from "./icons/folderIcon";
import CreatePlaylistIcon from "./icons/createPlaylistIcon";
import LikedSongsIcon from "./icons/likedSongsIcon";
import { getUsersPlaylists, setUsersPlaylists, setSelectedPlaylist } from "@/store/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useWindowSize } from "@/helpers/helpers";
import { get } from "http";
export default function Sidebar() {
    const [onFocusHome, setOnFocusHome] = useState(false);
    const [onFocusSearch, setOnFocusSearch] = useState(false);
    const [onFocusFolder, setOnFocusFolder] = useState(false);
    const usersPlaylists = useAppSelector((state) => state.auth.usersPlaylists);
    const [selected, setSelected] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const window = useWindowSize();

    const getPlaylists = async () => {
        try {
            const response = await dispatch(getUsersPlaylists());
            console.log(response.payload.items, "response")
            dispatch(setUsersPlaylists(response.payload.items));
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        getPlaylists().then((response) => {
            console.log(usersPlaylists, "usersPlaylists");
        });

    }
        , []);

    useEffect(() => {
        console.log(usersPlaylists, "usersPlaylists");
    }
        , [usersPlaylists]);

    return (
        <div className="flex flex-col gap-2" style={{ height: window.height - 100 }}>
            <div className="flex flex-col bg-primaryBlack rounded-xl py-2" >
                <div onMouseOver={() => setOnFocusHome(true)}
                    onMouseLeave={() => setOnFocusHome(false)}
                    className="flex flex-row items-center justify-start cursor-pointer text-grey6 hover:text-white">
                    <HomeIcon color={onFocusHome ? "#fff " : "#808080"} />
                    <span className=" font-semibold ">Home</span>
                </div>
                <div
                    onMouseOver={() => setOnFocusSearch(true)}
                    onMouseLeave={() => setOnFocusSearch(false)}
                    className="flex flex-row items-center justify-start cursor-pointer text-grey6 hover:text-white">
                    <SearchIcon color={onFocusSearch ? "#fff " : "#808080"} />
                    <span className=" font-semibold ">Search</span>
                </div>
            </div>
            <div className="flex flex-col bg-primaryBlack rounded-xl py-2" style={{ height: window.height - 245 }}>
                <div
                    onMouseOver={() => setOnFocusFolder(true)}
                    onMouseLeave={() => setOnFocusFolder(false)}
                    className="flex flex-row items-center justify-start cursor-pointer text-grey6 hover:text-white">
                    <FolderIcon color={onFocusFolder ? "#fff " : "#808080"} />
                    <span className=" font-semibold">Your Library</span>
                </div>


                <div className="flex flex-col gap-2 ml-2 mt-4 text-grey6 overflow-auto ">

                    {usersPlaylists.map((playlist) => (
                        <div key={playlist.id} className={`flex flex-row gap-3 p-2 items-center rounded bg-none  hover:bg-[#393939]  cursor-pointer`}
                            onClick={() => { dispatch(setSelectedPlaylist(playlist.id)); setSelected(true) }}
                        >
                            <img className=" w-10 h-10 rounded-sm" src={playlist.images[0].url} alt="" />
                            <div className="flex flex-col truncate">
                                <span className=" text-white font-thin text-sm truncate ">{playlist.name}</span>
                                <span className=" font-thin text-sm  ">{playlist.owner.display_name} &bull; {playlist.type} </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
