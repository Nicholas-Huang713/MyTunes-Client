import {useEffect} from 'react';
import {getJwt} from './jwt';
import { useDispatch } from 'react-redux';
import { setData } from '../store/actions/songActions';
import axios from 'axios';

function useCheckUser () {
    const dispatch = useDispatch();

    useEffect(() => {
        const loggedUser = getJwt();
        if(loggedUser) {
            axios({
                url: 'http://localhost:5000/playlists/getuser',
                method: 'GET',
                headers: {'Authorization' : `Bearer ${loggedUser}`},
            })
            .then(res => {
                dispatch(setData(res.data));
            })
            .catch(err => console.log(err));
        }
    })
    
    return null
}

export default useCheckUser;