import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import {getJwt} from '../../helpers/jwt';

export default function PrivateRoute({children}) {
    const history = useHistory();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const loggedUser = getJwt();
        if(!loggedUser) {
            history.push('/');
        } else {
            setToken(loggedUser);
        }
    }, [history])


    return (
        <>
            {token? <>{children}</> : <>Loading...</>}
        </>
    )
}
