import React, { Component } from 'react';

class CountryAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            capital: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const newCountry = {
            name: this.state.name,
            capital: this.state.capital
        };

        this.props.addCountry(newCountry);

        this.setState({
            name: '',
            capital: ''
        });
    };

    render() {
        return (
            <div>
                <h2>Add Country</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Country Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <input
                        type="text"
                        name="capital"
                        placeholder="Capital"
                        value={this.state.capital}
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default CountryAdd;