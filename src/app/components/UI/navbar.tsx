
import SpotifyIconWithText from "../icons/spotifyIconWithText";
export default function Navbar() {

    return (
        <div className="absolute top-0 justify-between items-center w-screen bg-black  text-primaryWhite px-10 py-6">
            <div className="flex items-center gap-2">
                <SpotifyIconWithText width="117px" height="36px" color="white" />
            </div>
        </div>
    );
}