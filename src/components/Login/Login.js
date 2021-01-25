import React from 'react'
import MyForm from '../LoginForm/LoginForm';
import './Login.scss';

export default function Login() {
    const handleSubmit = (user) => {
        console.log(user)
    }
    return (
        <div className="login mt-5">
            <MyForm handleSubmit={handleSubmit}/>
        </div>
    )
}
