import React, {useState, useContext} from 'react';
import RegForm from '../RegForm/RegForm';
import axios from 'axios';
import './Registration.scss';
import { useHistory } from "react-router-dom";
import {UserContext} from '../../helpers/UserContext';
import {getJwt, setJwt} from '../../helpers/jwt';

export default function Registration() {
    const [errMsg, setErrMsg] = useState('');
    let history = useHistory();
    const {setUser} = useContext(UserContext);

    const handleSubmit = (newUser) => {
        console.log(newUser);
        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => {
                const token = res.data;
                setJwt(token);
                setUser(getJwt());
                history.push('/dashboard');
            })
            .catch(err => {
                console.log(err.response.data);
                setErrMsg(err.response.data);
            });
    }

    return (
        <div className="reg mt-5">
            <RegForm handleSubmit={handleSubmit} errMsg={errMsg}/>
        </div>
    )
}
