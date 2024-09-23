import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../villaCard/VillasCard.css';

function Villascard(props) {

    return (
        <>
            <div>Villascard</div>
            <div className='card'>
                <div>
                    <img src={props.url} alt="villas" />
                </div>
                <div className='card-details-div'>
                    <h2>{props.name}</h2>
                    <div>
                        <p>{props.dis1}</p>
                    </div>
                    <div>
                        <p>{props.dis2}</p>
                    </div>
                    <div>
                        <p>{props.dis3}</p>
                    </div>
                    <div>
                        <p>{props.dis4}</p>
                    </div>
                    <button>Explore villa</button>
                </div>
            </div>
        </>
    )
}

export default Villascard