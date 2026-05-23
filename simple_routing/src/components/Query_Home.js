import React from "react";

function Home() {
    return (
        <div style={pageStyle}>
            <h2>Home Page</h2>
            <p>Select ID to view details.</p>
        </div>
    );
}

const pageStyle = {
    background: 'skyblue',
    color: 'darkblue',
    padding: '0.10em'
}

export default Home;