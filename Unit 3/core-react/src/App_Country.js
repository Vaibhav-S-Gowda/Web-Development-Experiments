import './App_Country.css';
import React, { Component } from 'react';
import CountryTable from './components/Country_Table';
import CountryAdd from './components/Country_Add';
import CountryFilter from './components/Country_Filter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                { name: "India",   capital: "New Delhi" },
                { name: "USA",     capital: "Washington D.C." },
                { name: "Japan",   capital: "Tokyo" },
                { name: "Germany", capital: "Berlin" }
            ],
            search: ''
        };
    }

    addCountry = (newCountry) => {
        const isDuplicate = this.state.countries.some(
            c => c.name.toLowerCase() === newCountry.name.toLowerCase()
        );
        if (isDuplicate) return;

        this.setState(prev => ({           // ✅ functional setState
            countries: [...prev.countries, newCountry]
        }));
    };

    handleSearch = (value) => {
        this.setState({ search: value });
    };

    render() {
        const q = this.state.search.toLowerCase();  // ✅ compute once
        const filteredCountries = this.state.countries.filter(c =>
            c.name.toLowerCase().includes(q) ||
            c.capital.toLowerCase().includes(q)     // ✅ search capital too
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