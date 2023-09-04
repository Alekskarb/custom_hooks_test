import {useCallback, useEffect, useReducer, useState} from "react";

// let [value, setColor] = useState(-1);

export function useToggle(array) {

    let [count, setCount] = useState(-1);
    // let [count, setCount] = useState(array[count]);
    let [value, setColor] = useState(array[0]);

    // const initState = {data: []};
    // const reducer = (state, action) => {
    //     state = action.res
    //     return state
    // }

    useEffect(() => {
        // if (url) {
        count++
        // }
    }, [count]);

    function toggle(color) {
        if (color) {
            array.push(color)
        }
        if (array.indexOf(value) === array.length - 1) {
            count = -1;
        }
        if (array.length) {
            setCount(count++)
            setColor(array[count]);
        }
    }

    return [value, toggle]
}