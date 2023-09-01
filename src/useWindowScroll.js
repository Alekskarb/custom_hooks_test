import {useEffect, useState} from "react";

// let scroll = {}

export function useWindowScroll(initX, initY) {
    const [scrollX, setScrollX] = useState(initX);
    const [scrollY, setScrollY] = useState(initY);

    let scroll = {
        x: scrollX,
        y: scrollY,
    }

    function scrollTo(coordinates) {
        let newY = coordinates.y;
        scroll = {x: scrollX, y: newY}
        setScrollY(newY)
        setScrollX(scrollX)
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
        setScrollX(initX);
        setScrollY(initY);

    }, [scrollX, scrollY]);

    // console.log(scroll = newScroll)

    return {scroll, scrollTo}
}
