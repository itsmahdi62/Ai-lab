import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

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
                        <Link to="about" spy={true} offset={50} duration={500} smooth={true} onClick={closeMenu}>ABOUT</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="members" spy={true} offset={50} duration={500} smooth={true} onClick={closeMenu}>MEMBERS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="demo" spy={true} offset={50} duration={500} smooth={true} onClick={closeMenu}>RESERACH OUTPUT</Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to="news" spy={true} offset={50} duration={500} smooth={true} onClick={closeMenu}>NEWS & EVENTS</Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to="blog" spy={true} offset={-100} duration={500} smooth={true}onClick={closeMenu}>BLOG</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contacts" spy={true} offset={-150} duration={500} smooth={true} onClick={closeMenu}>CONTACTS</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
