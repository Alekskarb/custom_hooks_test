import {useEffect, useState} from "react";

export function useWindowScroll(initHeight, initWidth) {
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');

    useEffect(() => {
        setHeight(initHeight);
        setWidth(initWidth);
    }, [initHeight, initWidth]);

    return {height, width}
}
