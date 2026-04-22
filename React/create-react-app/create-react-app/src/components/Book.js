import React from 'react';


function Book(props) {
    return (
        <div style = {{border: '1px solid gray', margin: '10px', padding: '10px'}}>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <p>${props.price}</p>
        </div>
    );
}

export default Book;