import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo.png'


import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>ABOUT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#people' onClick={closeMenu}>PEOPLE</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#topics' onClick={closeMenu}>TOPICS</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#research' onClick={closeMenu}>RESERACH OUTPUT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#new' onClick={closeMenu}>NEWS & EVENTS</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#blog' onClick={closeMenu}>BLOG</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contacts' onClick={closeMenu}>CONTACTS</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
