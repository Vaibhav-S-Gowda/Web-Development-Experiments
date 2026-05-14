import React from "react";

class CountryFilter extends React.Component {
    handleChange = (e) => {
        this.props.setFilterText(e.target.value);
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="Filter countries..." onChange={this.handleChange}/>
            </div>
        );
    }
}

export default CountryFilter;