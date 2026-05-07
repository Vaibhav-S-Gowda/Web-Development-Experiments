import React, { Component } from 'react';

class CountryTable extends Component {
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
                        {this.props.countries.map((c, index) => (
                            <tr key={index}>
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

export default CountryTable;