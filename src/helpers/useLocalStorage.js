const useLocalStorage = (token) => {
    const setLocalStorage = () => {
        localStorage.setItem('token', token);
    }
    const getLocalStorage = () => {
        localStorage.getItem()
    }

    return [setLocalStorage, getLocalStorage]
}