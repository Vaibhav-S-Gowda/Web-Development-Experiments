import React from 'react';

const Aboutus=() =>{
    return(
        <div className='container' style={pageStyle}>
            <h4 className='center'>About</h4>
            <p>My about page content is here</p>
        </div>
    );
};
const pageStyle={
    background: 'grey',
    color:'black',
    padding: '0.10em'
};
export default Aboutus;