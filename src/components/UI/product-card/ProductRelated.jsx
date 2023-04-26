import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import firstWatch01 from '../../../assets/images/product/watch/watch01.avif'
import firstWatch04 from '../../../assets/images/product/watch/watch04.avif'
import secondWatch01 from '../../../assets/images/product/watch/watch05.avif'
import secondWatch04 from '../../../assets/images/product/watch/watch08.avif'
import thirdWatch01 from '../../../assets/images/product/watch/watch09.avif'
import thirdWatch04 from '../../../assets/images/product/watch/watch12.avif'
import fourthWatch01 from '../../../assets/images/product/watch/watch13.avif'
import fourthWatch04 from '../../../assets/images/product/watch/watch16.avif'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const productData = [
    {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Medium model, quartz movement, steel',
        price: '4,450.00',
        slider01: firstWatch01,
        slider04: firstWatch04
    }, {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Small model, quartz movement, steel',
        price: '3,550.00',
        slider01: secondWatch01,
        slider04: secondWatch04
    }, {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Large model, automatic mechanical movement, steel',
        price: '5,500.00',
        slider01: thirdWatch01,
        slider04: thirdWatch04
    }, {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Medium model, quartz movement, yellow gold',
        price: '24,300.00',
        slider01: fourthWatch01,
        slider04: fourthWatch04
    }, {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Medium model, quartz movement, yellow gold',
        price: '24,300.00',
        slider01: fourthWatch01,
        slider04: fourthWatch04
    }, {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Medium model, quartz movement, yellow gold',
        price: '24,300.00',
        slider01: fourthWatch01,
        slider04: fourthWatch04
    }, {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Medium model, quartz movement, yellow gold',
        price: '24,300.00',
        slider01: fourthWatch01,
        slider04: fourthWatch04
    }, {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Medium model, quartz movement, yellow gold',
        price: '24,300.00',
        slider01: fourthWatch01,
        slider04: fourthWatch04
    }, {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Medium model, quartz movement, yellow gold',
        price: '24,300.00',
        slider01: fourthWatch01,
        slider04: fourthWatch04
    }
]



const ProductRelated = () => {

    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        draggable: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {productData.map((item, index) => (
                <Card>
                    <Link>
                        <div className='product__wishlist'>
                            <AiOutlineHeart className='wishlist-item'/>
                        </div>
                        <div className="card__thumbnail">
                            <Card.Img variant="top" src={item.slider01}/>
                            <Card.Img variant="top" src={item.slider04}/>
                        </div>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <div className="price__card">
                                <span className='card-price'>${item.price}</span>
                            </div>
                            <Button className='addToBag' variant="dark">ADD TO BAG</Button>
                        </Card.Body>
                    </Link>
                </Card>
            ))}
        </Slider>
    )
}

export default ProductRelated