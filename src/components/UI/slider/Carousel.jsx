import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardImg01 from '../../../assets/images/cardImg01.jpg'
import cardImg02 from '../../../assets/images/cardImg02.jpg'
import cardImg03 from '../../../assets/images/cardImg03.jpg'
import cardImg04 from '../../../assets/images/cardImg04.jpg'
import cardImg05 from '../../../assets/images/cardImg05.jpg'
import {Link} from 'react-router-dom'
import '../../../styles/slider.css'

const sliderData = [
    {
        imgUrl: cardImg01
    }, {
        imgUrl: cardImg02
    }, {
        imgUrl: cardImg03
    }, {
        imgUrl: cardImg04
    }, {
        imgUrl: cardImg05
    }
]

function Carousel() {
    const settings = {
        infinite: false,
        slidesToShow: 3.35,
        slidesToScroll: 2,
        draggable: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
        ],
    };
    return (
            <Slider {...settings}>
                {sliderData.map((item, index) => (
                    <Link>
                        <div class="card-index">
                            <img className='image' id='img-card' src={item.imgUrl} alt=""/>
                            <figcaption>
                                <h3>DISCOVER</h3>
                            </figcaption>
                        </div>
                    </Link>
                ))}
            </Slider>
    )
}

export default Carousel