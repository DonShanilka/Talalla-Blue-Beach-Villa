import React from 'react'
import '../booking/Booking.css'
import { Card } from '@mui/material'
import Villascard from '../../Components/villaCard/Villascard.jsx'

function Bookingpage() {
    return (
        <section>
            <div className='booking-page-main-div'>
                <Villascard />
            </div>
        </section>
    )
}

export default Bookingpage