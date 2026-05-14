import './Event_App.css';
import React from 'react';
import CountryFilter from './components/Event_CountryFilter';
import CountryTable from './components/Event_CountryTable';
import CountryAdd from './components/Event_CountryAdd';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: [
                { name: "India", region: "Asia"},
                { name: "USA", region: "America"},
                { name: "Germany", region: "Europe"},
            ],
            filterText: ""
        };
    }
    addCountry = (country) => {
        this.setState({
            countries: [...this.state.countries, country]
        });
    };

    setFilterText = (text) => {
        this.setState({ filterText: text });
    };

    render() {
        const filteredCountries = this.state.countries.filter(c =>
            c.name.toLowerCase().includes(this.state.filterText.toLowerCase())
        );

        return (
            <div className='App'>
                <h1>Country Tracker</h1>

                <CountryFilter setFilterText = {this.setFilterText} />
                <hr/>

                <CountryTable countries = {filteredCountries} />
                <hr/>

                <CountryAdd addCountry = {this.addCountry} />
            </div>
        );
    }
}

export default App;