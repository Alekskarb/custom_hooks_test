import {useCallback, useReducer, useState} from "react";

export function useFetch(url) {
    // const initState = {data: []};
    // const reducer = (state, action) => {
    //     state = action.res
    //     return state
    // }
    const [serverData, setServerData] = useState(null);
    // const [serverData, dispatch] = useReducer(reducer, initState);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // useEffect(() => { loadInitialTodos() }, []) // componentDidMount
    //
    // async function loadInitialTodos() {
    //     const initialTodos = await get('/todos')
    //     if (response.ok) setTodos(initialTodos)
    // }

    async function reFetch(params) {
        fetch(url, [params]).then(response => {
            setLoading(true)
            // dispatch({response.json()})

            return response.json();
        }).then(res => {
            // dispatch({res})
            setServerData(res)
        })
            .catch(error => setError(error))
            .finally((end) => {
                setLoading(false)
                // dispatch()
            });
    }

    return {
        serverData,
        isLoading,
        error,
        reFetch
    }
}