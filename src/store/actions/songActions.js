import {SET_DATA, LOG_OUT, PLAY_SONG, SEARCH_MUSIC, SET_PLAYING, SET_PAUSE, SET_CURRENT_SONG, SET_FAVE_ID_LIST, ADD_TO_FAVE_ID_LIST, REMOVE_FROM_FAVE_ID_LIST, SET_USER_FAVES} from './types';
import axios from 'axios';
import {getJwt} from '../../helpers/jwt';
import {playlistRoute} from '../../routes';

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

//set true or false value and set current song
export const setPlaying = () => dispatch => {
    dispatch({
        type: SET_PLAYING,
    })
}

//set pause
export const setPause = () => dispatch => {
    dispatch({
        type: SET_PAUSE,
    })
}

export const setCurrentSong = (songDetails) => dispatch => {
    dispatch({
        type: SET_CURRENT_SONG,
        payload: songDetails
    })
}

export const addToFaveIdList = (song) => dispatch => {
    const jwt = getJwt();
    axios({
        url: `${playlistRoute}/like`,
        method: 'POST',
        headers: {'Authorization' : `Bearer ${jwt}`},
        data: song
    })
        .then(() => {
            dispatch({
                type: ADD_TO_FAVE_ID_LIST,
                payload: song.id
            })
            axios({
                url: `${playlistRoute}/getuser`,
                method: 'GET',
                headers: {'Authorization' : `Bearer ${jwt}`}
            })
                .then(res => dispatch({type: SET_DATA, payload: res.data}))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

export const removeFromFaveIdList = (id) => dispatch => {
    const jwt = getJwt();
    console.log("id: " + id)
    axios({
        url: `${playlistRoute}/unlike/${id}`,
        method: 'PUT',
        // data: {id},
        headers: {'Authorization' : `Bearer ${jwt}`}
    })
        .then(() => {
            dispatch({
                type: REMOVE_FROM_FAVE_ID_LIST,
                payload: id
            })
            axios({
                url: `${playlistRoute}/getuser`,
                method: 'GET',
                headers: {'Authorization' : `Bearer ${jwt}`}
            })
                .then(res => dispatch({type: SET_DATA, payload: res.data}))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

export const logOut = () => dispatch => {
    dispatch({
        type: LOG_OUT
    })
}

export const setData = (userData) => dispatch => {
    dispatch({
        type: SET_DATA,
        payload: userData
    })
    const idList = userData.favorites.map(song => song.id);
    dispatch({
        type: SET_FAVE_ID_LIST,
        payload: idList
    })
}

export const setFaveIdList = (idList) => dispatch => {
    dispatch({
        type: SET_FAVE_ID_LIST,
        payload: idList
    })
}