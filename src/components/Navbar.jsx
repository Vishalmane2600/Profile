import React from 'react';
import { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='nav'>
            <div className="logo">
               <h1><span>V</span>ishal <span>M</span>ane</h1>
            </div> 
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={`nav-li ${isOpen ? 'nav-active' : ''}`}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;