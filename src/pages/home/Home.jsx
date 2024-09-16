import React from 'react'
import '../home/Home.css'


const Home = () => {
    return (
        <>
            <div className="home-page-main-rect">
                <div>
                    <img src="../public/homePage-image/Jungle-Beach-Bay-Drone-Shot.jpg" alt="" style={{ position: "absolute", width: "100%", height: "100%", top: "0%", left: "0%" }} />
                </div>
                <div id="main-black-rect"></div>
            </div>
        </>
    )
}

export default Home