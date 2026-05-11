import React, { Component } from 'react';

// Renamed to avoid duplicate class name
class CountryTableView extends Component {
    render() {
        return (
            <div>
                <h2>Country List</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.countries.map((c) => (
                            <tr key={c.name}> {/* Use a stable unique key */}
                                <td>{c.name}</td>
                                <td>{c.capital}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const sampleCountry = { name: "India", capital: "New Delhi" }; // Define sample data

export default class CountryApp extends Component {
    constructor(props) {       // ✅ Accept props
        super(props);          // ✅ Forward props
        this.state = { countries: [] };

        setTimeout(() => {
            this.createCountry(sampleCountry); // ✅ sampleCountry now defined
        }, 4000);
    }

    componentDidMount() {
        this.loadData(); // ✅ Now defined below
    }

    loadData() {
        // Load initial data (e.g., from an API)
        this.setState({ countries: [] });
    }

    createCountry(country) {
        // ✅ Method now implemented
        this.setState(prev => ({
            countries: [...prev.countries, country]
        }));
    }

    render() { // ✅ render() added
        return <CountryTableView countries={this.state.countries} />;
    }
}