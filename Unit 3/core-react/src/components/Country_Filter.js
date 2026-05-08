import React, { Component } from 'react';

class CountryFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange = (e) => {
        const value = e.target.value;

        this.setState({ search: value });

        this.props.handleSearch(value);
    };

    render() {
        return (
            <div>
                <h2>Search Country</h2>
                <input
                    type="text"
                    placeholder="Enter country name..."
                    value={this.state.search}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default CountryFilter;