import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import {axiosInstance as axios} from "@/helpers/axios";
import { json } from "stream/consumers";
const qs = require('qs');
import { LOGIN_URL } from "@/spotify.js";
import { useAppDispatch } from "@/store/hooks";
import { useSelector } from "react-redux";

interface AuthState {
    deviceId: string;
    usersPlaylists: any[];
    selectedPlaylist: any;
    gradient: string;
    selectedTrackMs: number;
    playingTrackMs: number;
    selectedTrack: any;
}
 

const initialState: AuthState = {
    deviceId: '',
    usersPlaylists: [],
    selectedPlaylist: null,
    gradient: '',
    selectedTrackMs: 0,
    playingTrackMs: 0,
    selectedTrack: null,
  };

interface playActionStates {
    deviceId: string;
//    albumUri: string;
    trackUri: string[];
    action: string;
}   

export const getFollowedArtists = createAsyncThunk(
    "auth/getFollowedArtists",
    async () => {
        try {
            const response = await axios.get('api/server/me/following?type=artist');
            return response.data;
        } catch (error) {
            console.error('Hata:', error);
            throw error;
        }
    }
);

export const getUsersPlaylists = createAsyncThunk(
    "auth/getUsersPlaylists",
    async () => {
        try {
            const response = await axios.get('api/server/me/playlists');
            return response.data;
        } catch (error) {
            console.error('Hata:', error);
            throw error;
        }
    }
);

export const getDevices = createAsyncThunk(
    "auth/getDevices",
    async () => {
        try {
            const response = await axios.get('api/server/me/player/devices')
            

            return response;
        } catch (error) {
            console.error('Hata:', error);
            throw error;
        }
    }
);

export const startOrResumePlayback = createAsyncThunk(
    "auth/startOrResumePlayback",
    async (credentials: playActionStates) => {
        try {
            const response = await axios.put(`api/server/me/player/${credentials.action}?device_id=${credentials.deviceId}`,
            {
                'device_id': credentials.deviceId,
               // 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr
                'uris':  credentials.trackUri,
                'offset': {
                    'uri': credentials.trackUri[0]
                },
                'position_ms': 0
            },
            );
            return response.data;
        } catch (error) {
            console.error('Hata:', error);
            throw error;
        }
    }
);

export const getCurrentlyPlaying = createAsyncThunk(
    "auth/getCurrentlyPlaying",
    async () => {
        try {
            const response = await axios.get('api/server/me/player/currently-playing');
            return response.data;
        } catch (error) {
            console.error('Hata:', error);
            throw error;
        }
    }
);

export const seekToPosition = createAsyncThunk(
    "auth/seekToPosition",
    async (position: number) => {
        try {
            const response = await axios.put(`api/server/me/player/seek?position_ms=${position}`);
            return response.data;
        } catch (error) {
            console.error('Hata:', error);
            throw error;
        }
    }
);

export const getSelectedPlaylist = createAsyncThunk(    
    "auth/getSelectedPlaylist",
    async (playlistId: string) => {
        try {
            const response = await axios.get(`api/server/playlists/${playlistId}`);
            return response.data;
        } catch (error) {
            console.error('Hata:', error);
            throw error;
        }
    }
);

export const pausePlayback = createAsyncThunk(
    "auth/pausePlayback",
    async () => {
        try {
            const response = await axios.put('api/server/me/player/pause');
            return response.data;
        } catch (error) {
            console.error('Hata:', error);
            throw error;
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setDeviceId: (state, action: PayloadAction<string>) => {
            state.deviceId = action.payload;
        },
        setUsersPlaylists: (state, action: PayloadAction<any>) => {
            state.usersPlaylists = action.payload;
        },
        setSelectedPlaylist: (state, action: PayloadAction<any>) => {   
            state.selectedPlaylist = action.payload;
        },
        setGradient: (state, action: PayloadAction<string>) => {
            state.gradient = action.payload;
        },
        setSelectedTrackMs: (state, action: PayloadAction<number>) => {
            state.selectedTrackMs = action.payload;
        },
        setPlayingTrackMs: (state, action: PayloadAction<number>) => {
            state.playingTrackMs = action.payload;
        },
        setSelectedTrack: (state, action: PayloadAction<any>) => {
            state.selectedTrack = action.payload;
        }

    },
    
});

export const { setDeviceId, setUsersPlaylists , setSelectedPlaylist, setGradient, setSelectedTrackMs, setPlayingTrackMs, setSelectedTrack} = authSlice.actions;

export default authSlice.reducer;


