import React from 'react';

const Contact=() =>{
    return(
        <div className='container' style={pageStyle}>
            <h4 className='center'>Contact</h4>
            <p>My contact page content is here</p>
        </div>
    );
};
const pageStyle={
    background: 'skyblue',
    color:'maroon',
    padding: '0.10em'
};
export default Contact;