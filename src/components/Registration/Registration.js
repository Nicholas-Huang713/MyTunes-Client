import React, {useState} from 'react';
import RegForm from '../RegForm/RegForm';
import axios from 'axios';
import './Registration.scss';
import { useHistory } from "react-router-dom";

export default function Registration() {
    const [errMsg, setErrMsg] = useState('');
    let history = useHistory();

    const handleSubmit = (newUser) => {
        console.log(newUser);
        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => {
                const token = res.data;
                console.log("token" + token);
                localStorage.setItem('token', token);
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
