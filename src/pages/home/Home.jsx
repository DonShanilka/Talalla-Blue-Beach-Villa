import React from 'react'
import './home.css'

const Home = () => {
    return (
        <>
            <section>
                <div id='home' className="home-page-main-rect">
                    <div className='image-section'>
                        <img className='homePage-main-image' src="src\assets\HomePageImage\bluebeachvilla.JPG" alt="" />

                    </div>
                    <div className='homePage-white-div'></div>
                    <div className='details-section'>
                        <h1>Welcome to the<br /> Talalla Blue Beach Villa </h1>
                        <p>Life is a journey with moments that makes it special. If you are looking to create your next memory filled with nostalgia, we got just a piece of this heavenly island for you.</p>
                        <button className='booking-button'>Booking</button>
                    </div>
                    <h5 className='followus-h5'>FOLLOW US</h5>
                    <div className='followus-line'></div>
                    <div className='social-image-div'>
                        <img src="src\assets\HomePageImage\facebook-app-symbol.png" alt="" />
                        <img src="src\assets\HomePageImage\instagram.png" alt="" />
                        <img src="src\assets\HomePageImage\youtube (1).png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home