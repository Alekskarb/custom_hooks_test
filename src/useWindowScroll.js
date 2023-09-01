import {useEffect, useState} from "react";

let scroll = {}

export function useWindowScroll(initX, initY) {
    scroll = {
        x: initX,
        y: initY,
    }
    const [scrollX, setScrollX] = useState('');
    const [scrollY, setScrollY] = useState('');

    function scrollTo(coordinates) {
        let newY = coordinates.y;
        scroll = {x: scrollX, y: newY}
        // console.log(scroll)
        // up(scroll);
        // return scroll;
        // return () => {
        //     useEffect(() => {
        //         // setScrollY(initY);
        //         // setScrollX(initX);
        //         setScrollY(scroll.y);
        //         setScrollX(scroll.x);
        //     }, [scroll]);
        // }
        // return [scroll, scrollTo]
    }

    useEffect(() => {
        // setScrollY(initY);
        // setScrollX(initX);
        setScrollY(scroll.y);
        setScrollY(scrollY);

        setScrollX(scroll.x);
    }, [scroll]);

    // console.log(scroll = newScroll)

    return {scroll, scrollTo}
}
