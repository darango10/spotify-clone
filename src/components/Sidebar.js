import React from 'react';
import '../styles/sidebar.css'
import SidebarOptions from "./SidebarOptions";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "../DataLayer";

const Sidebar = () => {

    const [{playlists}] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img
                className="sidebar__image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1920px-Spotify_logo_with_text.svg.png"
                alt="spotify"/>

            <SidebarOptions title={"Home"} Icon={HomeIcon}/>
            <SidebarOptions title={"Search"} Icon={SearchIcon}/>
            <SidebarOptions title={"Your Library"} Icon={LibraryMusicIcon}/>
            <br/>
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist => (
                <SidebarOptions key={playlist.id} title={playlist.name}/>
            ))}
        </div>
    );
};

export default Sidebar;
