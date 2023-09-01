import './App.css';
import {useViewportSize} from "./useViewportSize";
import {useWindowEvent} from "./useWindowEvent";
import {useEffect, useRef, useState} from "react";

function App() {
    const [iHeight, setHeight] = useState(window.innerHeight);
    const [iWidth, setWidth] = useState(window.innerWidth);

    function eventHandler(event) {
        setHeight(event.target.innerHeight);
        setWidth(event.target.innerWidth);
    }
    useWindowEvent('resize', eventHandler, []);
    const {height, width} = useViewportSize(iHeight, iWidth);

    return (
        <>
            <div> Width: {width}, Height: {height} </div>
        </>
    )
}

export default App;
