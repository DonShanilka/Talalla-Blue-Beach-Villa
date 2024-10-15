import React, { useState } from 'react'
import MenuLink from '../MenuLink/MenuLink';
import './Header.css'

function HeaaderContent() {

    const [menu, setMenu] = useState("home");

    return (
        <div id='navcontent'>
            <img src="src\assets\HomePageImage\talla-blue-beach-villa-logo.png" alt="" className='hotel-log' />
            <a href="http://www.react.dev"></a>

            <div className="navbar">
                <ul className='navbar-menu'>
                    <li className={menu === "home" ? "active" : ""}>Home</li>
                    <li className={menu === "about" ? "active" : ""}>About</li>
                    <li className={menu === "service" ? "active" : ""}>Service</li>
                    <li className={menu === "booking" ? "active" : ""}>Booking</li>
                    <li className={menu === "contact" ? "active" : ""}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaaderContent