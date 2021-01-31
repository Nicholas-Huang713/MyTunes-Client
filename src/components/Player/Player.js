import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSelector} from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './Player.scss';


export default function Player() {
    const currentSong = useSelector(state => state.song.currentSong);

    return (
        <Nav as="ul" className="player"> 
            <div className="player__title ml-4">
                {currentSong.title ? (
                    <>  <div>
                            <img src={currentSong.album.cover_small} alt="album coverart" />
                        </div>
                        <div>
                            <span className="text-bold">{currentSong.title}</span>
                            <br/>
                            <span>{currentSong.artist.name}</span>
                        </div>
                        <div className="ml-2">
                            <FavoriteBorderIcon />
                        </div>
                    </>
                ) : (
                    <></>
                )}
                
            </div>
            <div className="player__controls text-left">
            <ReactAudioPlayer
                src={currentSong.preview}
                autoPlay
                controls
                volume={0.5}
                className="player__controls__audioplayer"
            />
            </div>
            {/* <div className="player__volume mr-4">3</div> */}
        </Nav>
    )
}
