import React, {useEffect} from 'react'
import PlaylistCardContainerSm from '../../components/PlaylistCardContainerSm/PlaylistCardContainerSm';
import PlaylistCardSm from '../../components/PlaylistCardSm/PlaylistCardSm';
import PlaylistCardLg from '../../components/PlaylistCardLg/PlaylistCardLg';
import './Dashboard.scss';
import {checkUser} from '../../helpers/useCheckUser';

export default function Dashboard() {
    useEffect(() => {
         
    }, [])

    return (
        <div className="dashboard">
            <h2 className="mt-3">Your Playlists</h2>
            <PlaylistCardContainerSm>
                <PlaylistCardSm />
                <PlaylistCardSm />
                <PlaylistCardSm />
                <PlaylistCardSm />
                <PlaylistCardSm />
                <PlaylistCardSm />
            </PlaylistCardContainerSm>
            <div className="row mt-3 mr-4 ">
                <div className="col">
                    <h2>User Playlists</h2>
                </div> 
                <div className="col text-right mt-2">
                    See All
                </div>
            </div>
            
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
