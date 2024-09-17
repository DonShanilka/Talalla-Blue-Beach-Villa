import React from 'react'
import Navbar from '../../Components/HeaderContent/HeaaderContent'
import '../about/About.css'

const aboutPage = () => {
    return (
        <>
            <Navbar />
            <div className='about-page-main-div'>
                <h1>EXPERIENCE SANTORINI IN SRI LANKA</h1>
                <h5>DREAM IT OR LIVE IT</h5>
                <p className='about-page-main-para'>Our beautiful beach villa inspired by the Greek city of Santorini is located in Talalla,
                    a town just beyond Matara. The Villa is located in a cozy, unique and picturesque setting,
                    so your eyes can feast on a breathtaking view of the dusk and dawn escaping the usual crepuscular lifestyle.
                </p>
                <div className='about-page-second-rect'>
                    <div className='image-01-rect'>
                        <img src="src\assets\aboutPageImage\Villa-About-image-01.jpg" alt="" className='about-image-01' />
                    </div>
                    <div className='image-02-rect'>
                        <img src="src\assets\aboutPageImage\images (2).jpg" alt="" className='about-image-02' />
                    </div>
                    <div className='image-03-rect'>
                        <img src="src\assets\aboutPageImage\image 03.jpg" alt="" className='about-image-03' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default aboutPage