import React from 'react'
import '../booking/Booking.css'
import { Card } from '@mui/material'
import Villascard from '../../Components/villaCard/Villascard.jsx'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Bookingpage() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const productData = [
        {
            id: 1,
            imageUrl: 'https://talallablue.com/wp-content/uploads/2022/05/villa-zendaya-3-1024x576.jpg',
            alt: "Villa Zendaya",
            price: "$50",
            dis1: "Double Bedrooms x 2",
            dis2: "Bathrooms x 2",
            dis3: "Free WiFi,  Minibar,",
            dis4: "Air conditioning,  Bathtub"
        },
        {
            id: 2,
            imageUrl: "https://talallablue.com/wp-content/uploads/2022/05/villa-arbella-1-1024x576.jpg",
            alt: "Villa Arabella",
            price: "$50",
            dis1: "Double Bedrooms x 2",
            dis2: "Bathrooms x 2",
            dis3: "Free WiFi,  Minibar,",
            dis4: "Air conditioning,  Bathtub"
        },
        {
            id: 3,
            imageUrl: "https://talallablue.com/wp-content/uploads/2022/05/villa-maddalina-1-1024x576.jpg",
            alt: "Villa Maddalina",
            price: "$50",
            dis1: "Double Bedrooms x 2",
            dis2: "Bathrooms x 2",
            dis3: "Free WiFi,  Minibar,",
            dis4: "Air conditioning,  Bathtub"
        },
        {
            id: 4,
            imageUrl: "https://talallablue.com/wp-content/uploads/2022/05/villa-vallentina-1-1024x576.jpg",
            alt: "Villa Valentina",
            price: "$50",
            dis1: "Double Bedrooms x 2",
            dis2: "Bathrooms x 2",
            dis3: "Free WiFi,  Minibar,",
            dis4: "Air conditioning,  Bathtub"
        },
        {
            id: 5,
            imageUrl: "https://talallablue.com/wp-content/uploads/2022/05/villa-santa-maria-1-1024x576.jpg",
            alt: "Villa Santa Maria",
            price: "$50",
            dis1: "Double Bedrooms x 2",
            dis2: "Bathrooms x 2",
            dis3: "Free WiFi,  Minibar,",
            dis4: "Air conditioning,  Bathtub"
        }
    ]

    const product = productData.map((item) => <Villascard name={item.alt} url={item.imageUrl} price={item.price} dis1={item.dis1} dis2={item.dis2} dis3={item.dis3} dis4={item.dis4} />);

    return (
        <section>
            <div id='booking' className='booking-page-main-div'>
                <Carousel responsive={responsive}>{product}</Carousel>
            </div>
        </section>
    )
}

export default Bookingpage