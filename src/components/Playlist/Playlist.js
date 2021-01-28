import React, {useState} from 'react';
import PlaylistRow from './PlaylistRow/PlaylistRow'
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import './Playlist.scss';
import { useDispatch } from 'react-redux';
import {playSong} from '../../store/actions/songActions';

export default function Playlist({searchList}) {
    const dispatch = useDispatch();

    const [show, setShow] = useState(true);

    const handlePlay = (song) => {
        dispatch(playSong(song));
    }

    return (
        <div className="playlist">
        {searchList.length > 0 ? 
        <Table striped bordered hover variant="dark">
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
                        <PlaylistRow key={song.id} song={song} index={index} handlePlay={handlePlay} />
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
