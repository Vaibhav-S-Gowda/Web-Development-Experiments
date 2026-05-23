import React from 'react';

const Home=() =>{
    return(
        <div className='container' style={pageStyle}>
            <h4 className='center'>Home</h4>
            <p>My home page content is here</p>
        </div>
    );
};

const pageStyle={
    background: 'skyblue',
    color:'maroon',
    padding: '0.10em'
};

export default Home;