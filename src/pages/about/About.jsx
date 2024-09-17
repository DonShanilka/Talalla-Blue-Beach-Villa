import React from 'react'
import Navbar from '../../Components/HeaderContent/HeaaderContent'
import '../about/About.css'

const aboutPage = () => {
    return (
        <>
            <Navbar />
            <div className='about-page-main-div'>
                <p className='about-page-main-para'>Our beautiful beach villa inspired by the Greek city of Santorini is located in Talalla,
                    a town just beyond Matara. The Villa is located in a cozy, unique and picturesque setting,
                    so your eyes can feast on a breathtaking view of the dusk and dawn escaping the usual crepuscular lifestyle.
                </p>
            </div>
        </>
    )
}

export default aboutPage