type ButtonProps = {
    children?: string;
    onClick?: () => void;
    type?: "primary" | "secondary" | "textButton" | "navigationButton" | "actionButton";
    icon?: any;
    chevron?: "left" | "right";
    action?: "play" | "pause" | "lyrics" | "forward" | "backward" | "queue" | "shuffle";
};

const chevronLeft = [<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-grey6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
];
const chevronRight = [<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-grey6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
];

import PlayIcon from '../icons/playIcon';
import LyricsIcon from '../icons/lyricsIcon';
import ForwardIcon from '../icons/forwardIcon';
import BackwardIcon from '../icons/backwardIcon';
import QueueIcon from '../icons/queueIcon';
import ShuffleIcon from '../icons/shuffleIcon';

import { useState } from 'react';

export default function Button(props: ButtonProps) {
    const [onFocus, setOnFocus] = useState(false);

    if (props.type === "primary" || !props.type) {
        return (
            <button
                onClick={props.onClick}
                className=" font-semibold bg-primaryGreen text-primaryBlack px-10 py-3 rounded-full hover:bg-[#61C86A]"
            >
                {props.children}
            </button>
        );
    }
    if (props.type === "secondary") {
        return (
            <button
                onClick={props.onClick}
                className="flex flex-row justify-around gap-2 font-semibold border border-primaryWhite text-primaryWhite px-10 py-3 rounded-full hover:text-[#BBBBBB] hover:border-[#BBBBBB]"
            >
                {props.icon}
                {props.children}
            </button>
        );
    }
    if (props.type === "textButton") {
        return (
            <button
                onClick={props.onClick}
                className="font-semibold text-grey6 hover:text-primaryWhite"
            >
                {props.children}
            </button>
        );
    }
    if (props.type === "navigationButton") {
        return (
            <button
                onClick={props.onClick}
                className="flex justify-center items-center bg-primaryBlack hover:text-primaryWhite rounded-full p-2"
            >
                {props.chevron === "left" ? chevronLeft : chevronRight}
            </button>
        );
    }
    if (props.type === "actionButton") {
        return (
            <button
                onClick={props.onClick}
                className="flex justify-center items-center"
                onMouseOver={()=> setOnFocus(true)}
                onMouseLeave={()=> setOnFocus(false)}
            >

          {props.action == "play" ? <PlayIcon color={onFocus ? "#fff ": "#808080"} size="30" /> :
           props.action == "lyrics" ? <LyricsIcon color={onFocus ? "#fff ": "#808080"} /> :
           props.action == "forward" ? <ForwardIcon color={onFocus ? "#fff ": "#808080"} /> :
           props.action == "backward" ? <BackwardIcon color={onFocus ? "#fff ": "#808080"} /> : 
           props.action == "queue" ? <QueueIcon color={onFocus ? "#fff ": "#808080"} /> :
           props.action == "shuffle" ? <ShuffleIcon color={onFocus ? "#fff ": "#808080"} /> : null
          } 
                
            </button>
        );
    }
}
