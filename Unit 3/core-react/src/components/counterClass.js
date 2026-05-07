import React from "react";

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>

                <button onClick = {() => this.setState({ count: this.state.count + 1})}>
                    Increase
                </button>

                <button onClick = {() => this.setState({ count: this.state.count - 1})}>
                    Decrease
                </button>
            </div>
        )
    }
}

export default CounterClass;