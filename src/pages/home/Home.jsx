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
                    <p>Life is a journey with moments that makes it special. If you are looking to create your next memory filled with nostalgia, we got just a piece of this heavenly island for you.</p>
                    <button className='booking-button'>Booking</button>
                </div>
                <h5 className='followus-h5'>Follow Us</h5>
                <div className='followus-line'></div>
            </div>
            <div className='homePage-second-div'>

            </div>
        </>
    )
}

export default Home