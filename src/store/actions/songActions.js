import {SEARCH_MUSIC, PLAY_SONG} from './types';
import axios from 'axios';

//search music
export const searchMusic = (inputText) => dispatch => {
    const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: inputText},
        headers: {
          'x-rapidapi-key': '97b3d67fd7msh8ae0214eedae588p157a2cjsn1de270448a3e',
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    axios.request(options).then((res) => {
        const songList = res.data.data;
        console.log(songList);
        dispatch({
            type: SEARCH_MUSIC,
            payload: songList
        })
    }).catch((error) => {
        console.error(error);
    });
};

//play song from playlist and set current song
export const playSong = (songDetails) => dispatch => {
    dispatch({
        type: PLAY_SONG,
        payload: songDetails
    })
}   