import spotifyWebApi from 'spotify-web-api-node';

export const authEndpoint = "https://accounts.spotify.com/authorize";


const spotifyApi = new spotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
});

export default spotifyApi;

const scopes = [
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-read-email',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-top-read',
    // "user-library-modify",
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-follow-read',
  ].join(',');
  
  const params = {
    scope: scopes,
  };
  
  const querParamString = new URLSearchParams(params);
  
  const LOGIN_URL = 'https://accounts.spotify.com/authorize?' + querParamString.toString();

  export { LOGIN_URL };