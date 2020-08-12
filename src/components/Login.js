import React, {useEffect, useState} from 'react';
import '../styles/login.css'
import {getTokenFromUrl, loginUrl} from "../spotify";

const Login = () => {
    return (
        <div className="login">
            <img
                className="login__image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1920px-Spotify_logo_with_text.svg.png"
                alt="spotify"/>

            <a href={loginUrl} className="login__button">LOGIN WITH SPOTIFY</a>
        </div>
    );
};

export default Login;
