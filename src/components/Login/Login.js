import React, {useState, useContext} from 'react'
import MyForm from '../LoginForm/LoginForm';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {UserContext} from '../../helpers/UserContext';

import './Login.scss';

export default function Login() {
    const [errMsg, setErrMsg] = useState('');
    let history = useHistory();
    const {user, setUser} = useContext(UserContext);

    const handleSubmit = (user) => {
        console.log(user)
        axios.post('http://localhost:5000/users/login', user)
            .then(res => {
                const token = res.data;
                console.log('token' + token);
                localStorage.setItem('token', token);
                setUser(localStorage.getItem('token'))
                
                history.push('/dashboard');
            })
            .catch(err => {
                // console.log(err.response.data);
                setErrMsg(err.response.data);
            })
    }
    return (
        <div className="login mt-5">
            <MyForm handleSubmit={handleSubmit} errMsg={errMsg}/>
        </div>
    )
}
