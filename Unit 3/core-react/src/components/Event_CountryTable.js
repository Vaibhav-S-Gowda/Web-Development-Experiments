import React from "react";

class CountryTable extends React.Component {
    render() {
        return (
            <div>
                <h3>Country List</h3>
                <ul>
                    {this.props.countries.map((c, index) => (
                        <li key={index}>
                            {c.name} - {c.region}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CountryTable;