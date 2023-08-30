import './App.css';
import {useFetch} from "./useFetch";

function App() {
    // const [data, setServerData] = useState(data);
    // useEffect(() => {
    //     setServerData(data)
    // }, [data]);

    const {
        data,
        isLoading,
        error,
        reFetch
    } = useFetch('https://jsonplaceholder.typicode.com/posts');

    return (
        <div>
            <div>
                <button onClick={() => reFetch({
                    params: {
                        _limit: 3
                    }
                })}>
                    Перезапросить</button>
            </div>
            {isLoading && 'Загрузка...'}
            {error && 'Произошла ошибка'}
            {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
    );
}

export default App;
