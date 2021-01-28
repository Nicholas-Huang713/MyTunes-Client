import React, {useState, useContext} from 'react'
import MyForm from '../LoginForm/LoginForm';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {UserContext, UserDataContext} from '../../helpers/UserContext';
import {getJwt, setJwt} from '../../helpers/jwt';

import './Login.scss';

export default function Login() {
    const [errMsg, setErrMsg] = useState('');
    let history = useHistory();
    const {setUser} = useContext(UserContext);
    const {setUserData} = useContext(UserDataContext);

    const handleSubmit = (user) => {
        console.log(user)
        axios.post('http://localhost:5000/users/login', user)
            .then(res => {
                const token = res.data;
                setJwt(token);
                setUser(getJwt());
                axios({
                    url: 'http://localhost:5000/users/getlogged',
                    method: 'GET',
                    headers: {'Authorization' : `Bearer ${token}`}
                })
                    .then(res => {
                        setUserData(res.data)
                        console.log('user: ' + res.data)
                    })
                    .catch(err => console.log(err))
                    history.push('/dashboard');
            })
            .catch(err => {
                console.log(err.response.data);
                setErrMsg(err.response.data);
            })
        
    }
    return (
        <div className="login mt-5">
            <MyForm handleSubmit={handleSubmit} errMsg={errMsg}/>
        </div>
    )
}
