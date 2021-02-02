import React, {useState} from 'react';
import PlaylistRow from './PlaylistRow/PlaylistRow'
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import './Playlist.scss';
//redux
import {playSong, 
    setPlaying, 
    setCurrentSong, 
    setPause, 
    setFaveIdList,
    addToFaveIdList,
    removeFromFaveIdList} from '../../store/actions/songActions';
import { useSelector, useDispatch } from 'react-redux';

export default function Playlist({searchList}) {
    //redux
    const dispatch = useDispatch();
    const compareSong = useSelector(state => state.song.compareSong);
    const faveIdList = useSelector(state => state.song.faveIdList);
    const currentSong = useSelector(state => state.song.currentSong)
    //state
    const [show, setShow] = useState(true);

    const handleSelectSong = (song) => {
        dispatch(playSong(song));
        dispatch(setPlaying());
        dispatch(setCurrentSong(song)); 
    }

    const handlePauseSong = () => {
        dispatch(setPause());
        dispatch(setCurrentSong(null));
    }

    const handleLikeSong = (song) => {
        dispatch(addToFaveIdList(song));
    }

    const handleUnlikeSong = (id) => {
        dispatch(removeFromFaveIdList(id));
    }

    return (
        <div className="playlist">
        {searchList.length > 0 ?  
        <Table bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Like</th>
                <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {searchList.length > 0 && 
                    searchList.map((song, index) => (
                        <PlaylistRow key={song.id} song={song} currentSong={currentSong} compareSong={compareSong} index={index} handleSelectSong={handleSelectSong} handlePauseSong={handlePauseSong} handleLikeSong={handleLikeSong} handleUnlikeSong={handleUnlikeSong} faveIdList={faveIdList}/>
                    )
                )}
            </tbody>
        </Table>
        :
        <>
            <Alert show={show} variant="info">
                <Alert.Heading>Get Started Now!</Alert.Heading>
                <p>
                    Search for your favorite artist, album, or song
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-secondary">
                    Got it!
                </Button>
                </div>
            </Alert>
        </>    
        }
            
        </div>
    )
}
