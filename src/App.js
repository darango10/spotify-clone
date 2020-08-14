import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./components/Login";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

    const [accessToken, setAccessToken] = useState(null);
    const [{user, token}, dispatch] = useDataLayerValue();

    // console.log(user)

    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = "";

        const token = hash.access_token

        if (token) {
            dispatch({
                type: 'SET_TOKEN',
                token: token
            })
            setAccessToken(token);
            spotify.setAccessToken(token);
            spotify.getMe().then(user => {
                // console.log(user)
                dispatch({
                    type: 'SET_USER',
                    user: user
                })
            })

            spotify.getUserPlaylists().then((playlists) => {
                // console.log(playlists)
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists
                })
            })

            spotify.getPlaylist('37i9dQZEVXcWns04GZ9GeU').then((response) =>
                dispatch({
                    type: 'SET_DISCOVER_WEEKLY',
                    discover_weekly: response
                })
            )
        }
    }, []);


    return (
        <div className="app">
            {
                token ? <Player spotify={spotify}/> : <Login/>
            }

        </div>
    );
}

export default App;
