import React from 'react'
import '../service/Service.css'

function Service() {
    return (
        <>
            <section>
                <div className='service-page-main-div'>
                    <div className='image-div'>
                        <img src="src\assets\servicepageImage\IMG_7957.JPG" alt="" className='service-main-image' />
                    </div>
                    <div className='service-details-div'>
                        <div className='details-01'>
                            <h5>Front Desk/Reception</h5>
                            <h5>Housekeeping</h5>
                            <h5>Room Service</h5>
                            <h5>Food and Beverage</h5>
                            <h5>Concierge Services</h5>
                            <h5>Valet Parking</h5>
                        </div>
                        <div className='details-02'>
                            <h5>Laundry and Dry Cleaning</h5>
                            <h5>Meeting Facilities</h5>
                            <h5>Security</h5>
                            <h5>Leisure and Recreation</h5>
                            <h5>Wi-Fi and Technology</h5>
                            <h5>Transportation Services</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service