import React from 'react'
import '../home/Home.css'


const Home = () => {
    return (
        <>
            <div className="home-page-main-rect">
                <div className='image-section'>
                    <img className='homePage-main-image' src="src\assets\HomePageImage\bluebeachvilla.JPG" alt="" />

                </div>
                <div className='homePage-white-div'></div>
                <div className='details-section'>
                    <h1>Welcome to the<br /> Talalla Blue Beach Villa </h1>
                </div>
            </div>
        </>
    )
}

export default Home