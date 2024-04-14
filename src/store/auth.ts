import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import {axiosInstance as axios} from "@/helpers/axios";
import { json } from "stream/consumers";
const qs = require('qs');
import { LOGIN_URL } from "@/spotify.js";
import { useAppDispatch } from "@/store/hooks";
import { useSelector } from "react-redux";


const client_id = '825a75de726d4a8a9d91bd1d4cc7b207';
const client_secret = '96673ec2a227494d8937ea5e158f1ccc';
const auth_token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const data = qs.stringify({'grant_type':'client_credentials'});


interface AuthState {
    deviceId: string;
    usersPlaylists: any[];
    selectedPlaylist: any;
    gradient: string;
}
 

const initialState: AuthState = {
    deviceId: '',
    usersPlaylists: [],
    selectedPlaylist: null,
    gradient: ''
  };

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
    async (deviceId: string) => {
     
        try {
            const response = await axios.put(`api/server/me/player/play?device_id=${deviceId}`,
            {
                'device_id': deviceId,
                'context_uri': 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr',
                'offset': {
                    'position': 5
                },
                'position_ms': 0
            },
            );
            console.log(deviceId)
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
        }


    },
    
});

export const { setDeviceId, setUsersPlaylists , setSelectedPlaylist, setGradient} = authSlice.actions;

export default authSlice.reducer;


