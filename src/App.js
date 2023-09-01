import './App.css';
import {useViewportSize} from "./useViewportSize";
import {useWindowEvent} from "./useWindowEvent";
import {useEffect, useRef, useState} from "react";
import {useWindowScroll} from "./useWindowScroll";

function App() {
    const [scrollX, setScrollX] = useState(window.scrollY);
    const [scrollY, setScrollY] = useState(window.scrollY);

    function eventHandler(event) {
        setScrollX(event.target.scrollX);
        setScrollY(event.target.scrollY);
    }
    useWindowEvent('resize', eventHandler, []);

    const [scroll, scrollTo] = useWindowScroll();

    return (
        <div>
            <p>
                Scroll position x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({y: 0})}>Scroll to top</button>
        </div>
    );
}

export default App;
