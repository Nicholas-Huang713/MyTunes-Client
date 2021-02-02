import {useEffect} from 'react';
import {getJwt} from './jwt';
import { useDispatch } from 'react-redux';
import { setData } from '../store/actions/songActions';

export default function useCheckUser() {
    const updateUser = () => {
        axios({
            url: 'http://localhost:5000/playlists/getuser',
            method: 'GET',
            headers: {'Authorization' : `Bearer ${loggedUser}`},
        })
        .then(res => {
            console.log(res.data);
            dispatch(setData(res.data));
        })
        .catch(err => console.log(err))
    }   
    return updateUser;
}