import React from "react";

function Child(props) {
    return <h2>Message from Parent: {props.message}</h2>;
}

function App() {
    const msg = "Hello from parent component";

    return(
        <div>
            <h1>Unidirectional Data Flow Example</h1>
            <Child message = {msg}/>
        </div>
    );
}

export default App;