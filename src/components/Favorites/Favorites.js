import React from 'react';
import Playlist from '../Playlist/Playlist';
import {useSelector} from 'react-redux';

import './Favorites.scss';

export default function Favorites() {
    const faveList = useSelector(state => state.song.userData.favorites);
    return (
        <div className="favorites">
            <Playlist songList={faveList} />
        </div>
    )
}
