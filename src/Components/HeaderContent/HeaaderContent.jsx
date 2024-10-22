import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function HeaaderContent() {

    return (
        <div id='navcontent'>
            <img src="src\assets\HomePageImage\talla-blue-beach-villa-logo.png" alt="" className='hotel-log' />
            <a href="http://www.react.dev"></a>

            <div className="navbar">
                <ul className="navbar-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaaderContent