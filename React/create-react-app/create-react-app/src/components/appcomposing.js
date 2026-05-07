// import React from "react";
import React, { Component } from "react";
import './App.css';

class CountryFilter extends Component {
    render() {
        return (
            <div>This is a placeholder for the country filter</div>
        );
    }
}

class CountryTable  extends Component {
    render() {
        return (
            <div>This is a placeholder for a table of country</div>
        );
    }
}

class CountryAdd  extends Component {
    render() {
        return (
            <div>This is a placeholder for a form to add a country</div>
        );
    }
}

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <React.Fragment>
                    <h1>Country Tracker</h1>
                    <CountryFilter/>
                    <hr/>
                    <CountryTable/>
                    <hr/>
                    <CountryAdd/>
                    <hr/>
                </React.Fragment>
            </header>
        </div>
    );
}
export default App;