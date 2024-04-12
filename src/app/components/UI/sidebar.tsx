import React, { useState } from "react";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import FolderIcon from "../icons/FolderIcon";
import CreatePlaylistIcon from "../icons/CreatePlaylistIcon";
import LikedSongsIcon from "../icons/LikedSongsIcon";
    export default function Sidebar() {
        const [onFocus, setOnFocus] = useState(false);
        return (
            <div className="flex bg-black h-screen w-[16%] rounded-2xl"
            >
              
                    <HomeIcon />
                    
           
                <span 
                onMouseOver={()=> setOnFocus(true)}
                onMouseLeave={()=> setOnFocus(false)}>
                    <SearchIcon color={onFocus ? "#fff ": "#808080"}  />
                    
                </span>
                <span
                onMouseOver={()=> setOnFocus(true)}
                onMouseLeave={()=> setOnFocus(false)}>
                    <FolderIcon color={onFocus ? "#fff ": "#808080"}  />
                </span>
                
                    <CreatePlaylistIcon color={onFocus ? "#fff ": "#808080"}  />
       
         
                    <LikedSongsIcon color={onFocus ? "#fff ": "#808080"}  />
                       
                
            </div>
        );
    }
