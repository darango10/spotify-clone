import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./components/Login";
import {getTokenFromUrl} from "./spotify";

function App() {

    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = "";

        const token = hash.access_token

        if (token) {
            setAccessToken(token)
        }
    }, []);


    return (
        <div className="app">
            {
                accessToken ? <h1>Home Page</h1> : <Login/>
            }

        </div>
    );
}

export default App;
