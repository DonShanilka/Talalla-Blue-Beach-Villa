import React from 'react'
import MenuLink from '../../MenuLink/MenuLink';
import './Header.css'

function HeaaderContent() {
    return (
        <div id='navcontent'>
            <a href="http://www.react.dev"></a>

            <div>
                <MenuLink linkname="Home" url="/" />
                {/* <MenuLink linkname="About" url="/about" />
                <MenuLink linkname="Contact" url="/contact" /> */}
            </div>
            <button>Sign in</button>
        </div>
    )
}

export default HeaaderContent