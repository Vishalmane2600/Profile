import React from 'react';
// Import your logo image

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="logo">
               <h1> <span>V</span>ishal <span>M</span>ane</h1>
            </div>
            <ul className='nav-li'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#skills">Protfolio</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
