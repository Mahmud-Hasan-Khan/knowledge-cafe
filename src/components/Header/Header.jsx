import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h1>Programming School</h1>
            </div>
            <a href="">
                <img src="https://randomuser.me/api/portraits/thumb/men/26.jpg" alt="" />
            </a>
        </nav>
    );
};

export default Header;