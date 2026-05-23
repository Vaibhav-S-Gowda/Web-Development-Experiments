import React from 'react';
import { Link } from 'react-router-dom';

const pageStyle = {
    background: 'lightblue',
    padding: '10px',
    textAlign: 'center'
};

const Navbar = () => {
    return (
        <nav>
            <div className='navbar' style={pageStyle}>
                
                <span className='Home'>
                    <Link to="/">Home</Link>
                </span>

                {' | '}

                <span className='aboutus'>
                    <Link to="/aboutus">About us</Link>
                </span>

                {' | '}

                <span className='contact'>
                    <Link to="/contact">Contact us</Link>
                </span>

            </div>
        </nav>
    );
};

export default Navbar;