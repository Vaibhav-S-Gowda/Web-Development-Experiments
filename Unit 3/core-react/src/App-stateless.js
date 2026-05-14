const HelloWorld = (props) => {
    return (
        <div title = "Outer div">
            <h1>{props.message}</h1>
        </div>
    );
};

function App() {
    return (
        <div className='App'>
            <header className='App-header'></header>
            <div>
                <HelloWorld message="Welcome to React Functional Component!"></HelloWorld>
            </div>
        </div>
    )
}

export default App;