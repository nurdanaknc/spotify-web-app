import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import {axiosInstance as axios} from "@/helpers/axios";
import { json } from "stream/consumers";
const qs = require('qs');


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
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
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

        try {
            const response = await axios.post(token_url, data, {
                headers: {
                    'Authorization': `Basic ${auth_token}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
            console.log(response.data);
            return response.data; // İsteğin yanıtını geri döndürmek istiyorsanız ekleyebilirsiniz.
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


