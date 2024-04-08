import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import {axiosInstance as axios} from "@/helpers/axios";
import { json } from "stream/consumers";
const qs = require('qs');
import { LOGIN_URL, scopes } from "@/spotify.js";


const client_id = '825a75de726d4a8a9d91bd1d4cc7b207';
const client_secret = '96673ec2a227494d8937ea5e158f1ccc';
const auth_token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const data = qs.stringify({'grant_type':'client_credentials'});


interface AuthState {
    url : string,
    headers : object,
    form : object
}
 

const initialState: AuthState = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': LOGIN_URL,
    },
    form: {
      grant_type: 'client_credentials'
    }
  };


  export const fetchToken = createAsyncThunk(
    "auth/fetchToken",
    async () => {
        const token_url = 'https://accounts.spotify.com/api/token';
        const data = qs.stringify({ 'grant_type': 'client_credentials' });
        const refresh_token: string = process.env.SPOTIFY_REFRESH_TOKEN || "";

        try {
            const response = await fetch(
                "https://accounts.spotify.com/api/token",
                {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
                }
            );
            console.log(response.json);
            return response.json; // İsteğin yanıtını geri döndürmek istiyorsanız ekleyebilirsiniz.
        } catch (error) {
            console.error('Hata:', error);
            throw error; // Hata durumunda isteği yakalayıp uygun şekilde işleyin.
        }
    }
);






const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    
});

export const {  } = authSlice.actions;

export default authSlice.reducer;


