import {useState} from "react";

export function useLocalStorage(initToken) {
    const [token, setToken] = useState(initToken);

    function setItem(newToken) {
        setToken(newToken)
        localStorage.setItem('token', newToken)
    }
    function removeItem() {
        setToken('')
        localStorage.clear()
    }

    return [token, {setItem, removeItem}]
}