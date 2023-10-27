import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/' >ABOUT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#people' >PEOPLE</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#research' >RESERACH OUTPUT</a>
                    </li>
                    {/* <li className='nav-item'>
                        <a href='#news' >NEWS & EVENTS</a>
                    </li> */}
                    <li className='nav-item'>
                        <a href='#blog' >BLOG</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contacts' >CONTACTS</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2023 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
