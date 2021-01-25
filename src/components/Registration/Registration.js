import React from 'react';
import RegForm from '../RegForm/RegForm';
import axios from 'axios';
import './Registration.scss';

export default function Registration() {

    const handleSubmit = (newUser) => {
        console.log(newUser);
        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log("data" + res.data))
            .catch(err => console.log("error: " + err));
    }

    return (
        <div className="reg mt-5">
            <RegForm handleSubmit={handleSubmit} />
        </div>
    )
}
