export const getJwt = () => {
    return localStorage.getItem('token');
}

export const setJwt = (token) => {
    localStorage.setItem('token', token);
}

export const removeJwt = () => {
    localStorage.removeItem('token');
}