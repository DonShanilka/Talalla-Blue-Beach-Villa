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
                    <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                    <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</li>
                    <li onClick={() => setMenu("service")} className={menu === "service" ? "active" : ""}>Service</li>
                    <li onClick={() => setMenu("booking")} className={menu === "booking" ? "active" : ""}>Booking</li>
                    <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaaderContent