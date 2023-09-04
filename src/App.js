import './App.css';
import {useToggle} from "./useToggle";
// import {useReducer} from "react";

// const initState = {
//     color: 'white',
// }

// const reducer = (state, action) => {
//     console.log('action: ', action)
//     switch (action.type) {
//         case 0:
//             return {
//                 ...state,
//                 count: state.count + action.payload
//             }
//         case 1:
//             return {
//                 ...state,
//                 count: state.count - action.payload
//             }
//         case  'RESET':
//             return {
//                 ...state,
//                 count: 0
//             }
//         case  'CHANGE':
//             return {
//                 ...state,
//                 name: action.payload
//             }
//         default:
//             throw new Error()
//     }
// }

function App() {
    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
    // const [value, toggle] = useToggle(['light', 'dark']);

    // const [state, dispatchColor] = useReducer(reducer, initState);
    // console.log('state: ', state)

    // const dispatchColor = () => {
    //     dispatch({
    //         type: 'DESC',
    //         payload: 10
    //     });
    // }

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
