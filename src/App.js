import './App.css';
import {useWindowEvent} from "./useWindowEvent";
import { useState} from "react";
import {useWindowScroll} from "./useWindowScroll";

function App() {
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    function eventHandler(event) {
        // setScrollX(event.currentTarget.screenX);
        // setScrollY(event.currentTarget.screenY);
        setScrollX(event.currentTarget.scrollX);
        setScrollY(event.currentTarget.scrollY);
    }
    useWindowEvent('scroll', eventHandler, []);

    const {scroll, scrollTo} = useWindowScroll(scrollX, scrollY);

    return (
        <div className='App-header'>
            <p>
                Scroll position X: {scroll.x}, Y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({y: 99})}>Scroll to top</button>
        </div>
    );
}

export default App;
