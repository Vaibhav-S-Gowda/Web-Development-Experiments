import React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
                <h2>{this.props.title}</h2>
                <p>{this.props.author}</p>
                <p>${this.props.price}</p>
            </div>
        );
    }
}

export default Book;