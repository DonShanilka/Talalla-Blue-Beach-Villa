import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Villascard() {

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

    return (
        <>
            <div>Villascard</div>
            <div className='card' style={{
                position: "absolute", zIndex: 5,
                top: "20%", left: "-5%", width: "100%",
                color: "black", overlay: "none"
            }}>
                <Carousel responsive={responsive}>
                    <div>
                        <img src="src\assets\villasImage\villa-zendaya-3.jpg" alt="product" width={300} height={180} />
                        <h2>Villa Zendaya</h2>
                        <div className='card-01-details-div'>
                            <div>
                                <p>Double Bedrooms x 2</p>
                            </div>
                            <div>
                                <p>Bathrooms x 2</p>
                            </div>
                            <div>
                                <p> Free WiFi,  Minibar,</p>
                            </div>
                            <div>
                                <p>Air conditioning,  Bathtub</p>
                            </div>
                        </div>
                    </div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>
            </div>
        </>
    )
}

export default Villascard