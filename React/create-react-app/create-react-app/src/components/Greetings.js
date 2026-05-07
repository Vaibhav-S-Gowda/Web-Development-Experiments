import React from 'react';

const Greetings = ({name}) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to the greeting page</p>
        </div>
    );
};

export default Greetings;