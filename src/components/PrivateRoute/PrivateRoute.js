import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

export default function PrivateRoute({children}) {
    let history = useHistory();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const jwt = localStorage.getItem('token');
        if(!jwt) {
            history.push('/')
        } else {
            setToken(jwt);
        }
    }, [])
    return (
        <>
            {token? <>{children}</> : <>Loading...</>}
        </>
    )
}
