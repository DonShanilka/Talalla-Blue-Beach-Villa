import React from 'react'
import MenuLink from '../MenuLink/MenuLink';
import './Header.css'

function HeaaderContent() {
    return (
        <div id='navcontent'>
            <img src="src\assets\HomePageImage\talla-blue-beach-villa-logo.png" alt="" className='hotel-log' />
            <a href="http://www.react.dev"></a>

            <div className="navbar">
                <MenuLink linkname="Home" url="/" />
                <MenuLink linkname="About" url="/about" />
                <MenuLink linkname="Service" url="/service" />
                <MenuLink linkname="Bookin" url="/bookin" />
                <MenuLink linkname="Contact" url="/contact" />
            </div>
        </div>
    )
}

export default HeaaderContent