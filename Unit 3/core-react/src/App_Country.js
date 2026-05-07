import './App_country.css';
import React, { Component } from 'react';
import CountryTable from './components/Country_Table';
import CountryAdd from './components/Country_Add';
import CountryFilter from './components/Country_Filter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                { name: "India", capital: "New Delhi" },
                { name: "USA", capital: "Washington D.C." },
                { name: "Japan", capital: "Tokyo" }
            ],
            search: ''
        };
    }

    addCountry = (newCountry) => {
        this.setState({
            countries: [...this.state.countries, newCountry]
        });
    };

    handleSearch = (value) => {
        this.setState({ search: value });
    };

    render() {
        // 🔥 FILTER LOGIC HERE
        const filteredCountries = this.state.countries.filter(c =>
            c.name.toLowerCase().includes(this.state.search.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Country Tracker</h1>

                <CountryFilter handleSearch={this.handleSearch} />
                <hr />

                <CountryTable countries={filteredCountries} />
                <hr />

                <CountryAdd addCountry={this.addCountry} />
            </div>
        );
    }
}
export default App;