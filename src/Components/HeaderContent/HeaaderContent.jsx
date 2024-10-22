import React, { useState } from 'react'
import './Header.css'

function HeaaderContent() {

    return (
        <div id='navcontent'>
            <img src="src\assets\HomePageImage\talla-blue-beach-villa-logo.png" alt="" className='hotel-log' />
            <a href="http://www.react.dev"></a>

            <div className="navbar">
                <ul className="navbar-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#booking">Booking</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaaderContent