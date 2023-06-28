import React from 'react'
import { useState } from 'react'
import Slider from "react-slick"
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client7 from "../assets/images/client7.png";
import client6 from "../assets/images/client6.png";
import client8 from "../assets/images/client8.png"
import quote from "../assets/images/quote.svg";



function ReviewCrousal() {

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,

    }

    return (
        <div>
            <Slider>

                <div >
                    <img src={client1} alt="client Image" />
                </div>
                <div >
                    <img src={client1} alt="client Image" />
                </div>
                <div >
                    <img src={client1} alt="client Image" />
                </div>
                <div >
                    <img src={client1} alt="client Image" />
                </div>
                <div >
                    <img src={client1} alt="client Image" />
                </div>
                <div >
                    <img src={client1} alt="client Image" />
                </div>

            </Slider>
        </div>
    )
}

export default ReviewCrousal
