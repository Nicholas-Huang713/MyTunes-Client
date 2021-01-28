import React, {useEffect} from 'react'
import PlaylistCardContainerSm from '../../components/PlaylistCardContainerSm/PlaylistCardContainerSm';
import PlaylistCardSm from '../../components/PlaylistCardSm/PlaylistCardSm';
import PlaylistCardLg from '../../components/PlaylistCardLg/PlaylistCardLg';
import './Dashboard.scss';

export default function Dashboard() {
    // useEffect(() => {

    // }, [])
    return (
        <div className="dashboard">
            <h1>Your Playlists</h1>
            <PlaylistCardContainerSm>
                <PlaylistCardSm />
                <PlaylistCardSm />
                <PlaylistCardSm />
                <PlaylistCardSm />
                <PlaylistCardSm />
                <PlaylistCardSm />
            </PlaylistCardContainerSm>
            <h2>User Playlists</h2>
            <PlaylistCardContainerSm>
                <PlaylistCardLg/>
                <PlaylistCardLg/>
                <PlaylistCardLg/>
                <PlaylistCardLg/>
                <PlaylistCardLg/>
                
            </PlaylistCardContainerSm>
        </div>
    )
}
