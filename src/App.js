import './App.css';
// import {useHover} from "./useHover";
import {useRef, useState} from "react";
import {useHover} from "./useHover";

function App() {
    // const refHover = useRef(null)
    const [hover, setHover] = useState(null)
    // const {hovered, ref} = useHover(hover, refHover)
    const handler = (event, isHover) => {
        // ref.current = isHover
        setHover(isHover)
    }

    return (
        <div onMouseOver={(e) => handler(e, true)} onMouseLeave={(e) => handler(e, false)}>
        {/*<div ref={ref}>*/}
            {hover ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    );
}

export default App;
