import './App.css';
import {useToggle} from "./useToggle";

function App() {
    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
    // const [value, toggle] = useToggle(['light', 'dark']);

    return (
        <button onClick={() => toggle('dark')}>
            {value}
        </button>
    );
}

// Еще примеры использования

// toggle(); // -> value === 'light'
// toggle(); // -> value === 'dark'

// Так же можно передать конкретное значение и тогда
// function toggle(dark) {
// }
export default App;
