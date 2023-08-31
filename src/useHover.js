import {useEffect, useRef, useState} from "react";

export function useHover(hover, prevRef) {
    // if (prevRef.current ?? hover ?? true) {
    //     return {hovered, ref}
    // }
    const [hovered, setHovered] = useState(hover);
    const {ref} = useRef(!prevRef.current);

    useEffect(() => {
        let hh = prevRef.current;

        // hover !== null || hovered
        //     ? setHovered(false)
        //     : setHovered(true);

        // if (prevRef.current ?? hover ?? false) {
        hovered
            ? setHovered(false)
            : setHovered(true);
        console.log(hovered)

        // }
    }, [hover]);
    // }
    return {hovered, ref}
    // return [hovered]
}
