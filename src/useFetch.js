import {useCallback, useEffect, useReducer, useState} from "react";

export function useFetch(url) {
    // const initState = {data: []};
    // const reducer = (state, action) => {
    //     state = action.res
    //     return state
    // }
    const [data, setServerData] = useState(null);
    // const [serverData, dispatch] = useReducer(reducer, initState);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function fetchServer() {
        setLoading(true)
        fetch(url).then(response => response.json()
    ).then(res => {
            setServerData(res)
        })
            .catch(error => setError(error))
            .finally((end) => {
                setLoading(false)
            });
    }

 function reFetch(params) {
        setLoading(true)
        fetch(`${url}?_limit=${params.params._limit}`).then(response => response.json()
    ).then(res => {
            // dispatch({res})
            setServerData(res)
        })
            .catch(error => setError(error))
            .finally((end) => {
                setLoading(false)
            });
    }

    useEffect(() => {
        if (url) {
            fetchServer()
        }
    }, []);

    return {
        data,
        isLoading,
        error,
        reFetch
    }
}