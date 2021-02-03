import React, {useState, useContext, useEffect, useRef} from 'react';
import Nav from 'react-bootstrap/Nav';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
//redux
import { useSelector, useDispatch } from 'react-redux';
import {setPlaying, setPause, setCurrentSong, addToFaveIdList, removeFromFaveIdList} from '../../store/actions/songActions'
import './Player.scss';


function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}

export default function Player() {
    const audioRef = useRef(null);
    const dispatch = useDispatch();
    const currentSong = useSelector(state => state.song.currentSong);
    const playing = useSelector(state => state.song.playing);
    const faveIdList = useSelector(state => state.song.faveIdList);

    const [anchorEl, setAnchorEl] = useState(null);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(30);

    useEffect(() => {
        if(audioRef && audioRef.current) {
            if(playing) audioRef.current.play();
            else audioRef.current.pause();
        }
    }, [playing])

    useEffect(() => {
        if(audioRef && audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume])

    useInterval(() => {
        if(audioRef && audioRef.current) {
            const {currentTime, duration} = audioRef.current;
            setProgress(Math.ceil((currentTime * 100) / duration));
        }
    })

    const handlePauseClick = () => {
        dispatch(setPause());
        dispatch(setCurrentSong(null));
    }

    const handlePlayClick = (song) => {
        dispatch(setPlaying());
        dispatch(setCurrentSong(song));
    }

    const handleLikeSong = (song) => {
        dispatch(addToFaveIdList(song.id));
        // addFaves(song);
    }

    const handleUnlikeSong = (id) => {
        dispatch(removeFromFaveIdList(id));
        // removeFaves(id);
    }

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
    };

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
                <audio
                    src={currentSong.title && currentSong.preview}
                    autoPlay
                    ref={audioRef} 
                    onEnded={() => handlePauseClick()}
                />
                <div>
                    {currentSong.title? (
                        playing ? 
                            <PauseCircleOutlineIcon onClick={() => handlePauseClick()} fontSize="large"/>
                            :
                            <PlayCircleOutlineIcon onClick={() => handlePlayClick(currentSong)} fontSize="large"/>
                    ) : (
                        <PlayCircleOutlineIcon fontSize="large"/>
                    )}
                </div>
                    <div className="player__controls__progress"><LinearProgress variant="determinate" value={progress}/></div>
                    
               
            </div>
            <div className="player__volume mr-4">
                <div><VolumeDown /></div>
                <div className="mt-2 player__volume__slider">
                    {currentSong.title ? 
                        <Slider value={volume} onChange={handleVolumeChange} style={{width: '85%'}} aria-labelledby="continuous-slider" />
                        :
                        <Slider disabled value={volume} onChange={handleVolumeChange} aria-labelledby="disabled-slider" style={{width: '80%'}}/>
                    }
                </div>
            </div>
        </Nav>
    )
}
