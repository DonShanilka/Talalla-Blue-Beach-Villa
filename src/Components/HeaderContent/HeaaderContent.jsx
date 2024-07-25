import React from 'react'
import MenuLink from '../../MenuLink/MenuLink'
import './Header.css'

function HeaaderContent() {
    return (
        <div id='navcontent'>
            <a href="http://www.react.dev"></a>

            <div>
                {/* <img src={LogoImage} alt="" /> */}
                <MenuLink linkname="Home" url="/" />
                <MenuLink linkname="About" url="/about" />
                <MenuLink linkname="Contact" url="/contact" />
            </div>
        </div>
    )
}

export default HeaaderContent