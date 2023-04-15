import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import firstWatch01 from '../../../assets/images/product/watch/watch01.avif'
import firstWatch02 from '../../../assets/images/product/watch/watch02.avif'
import firstWatch03 from '../../../assets/images/product/watch/watch03.avif'
import firstWatch04 from '../../../assets/images/product/watch/watch04.avif'
import secondWatch01 from '../../../assets/images/product/watch/watch05.avif'
import secondWatch02 from '../../../assets/images/product/watch/watch06.avif'
import secondWatch03 from '../../../assets/images/product/watch/watch07.avif'
import secondWatch04 from '../../../assets/images/product/watch/watch08.avif'
import thirdWatch01 from '../../../assets/images/product/watch/watch09.avif'
import thirdWatch02 from '../../../assets/images/product/watch/watch10.avif'
import thirdWatch03 from '../../../assets/images/product/watch/watch11.avif'
import thirdWatch04 from '../../../assets/images/product/watch/watch12.avif'
import fourthWatch01 from '../../../assets/images/product/watch/watch13.avif'
import fourthWatch02 from '../../../assets/images/product/watch/watch14.avif'
import fourthWatch03 from '../../../assets/images/product/watch/watch15.avif'
import fourthWatch04 from '../../../assets/images/product/watch/watch16.avif'

import {Navigation, Scrollbar, A11y} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const productData = [
    {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Medium model, quartz movement, steel',
        price: '4,450.00',
        slider01: firstWatch01,
        slider02: firstWatch02,
        slider03: firstWatch03,
        slider04: firstWatch04,
    },
    {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Small model, quartz movement, yellow gold, leather',
        price: '3,550.00',
        slider01: secondWatch01,
        slider02: secondWatch02,
        slider03: secondWatch03,
        slider04: secondWatch04,
    },
    {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Large model, automatic mechanical movement, steel',
        price: '5,500.00',
        slider01: thirdWatch01,
        slider02: thirdWatch02,
        slider03: thirdWatch03,
        slider04: thirdWatch04,
    },
    {
        title: 'TANK FRANÇAISE WATCH',
        description: 'Medium model, quartz movement, yellow gold',
        price: '24,300.00',
        slider01: fourthWatch01,
        slider02: fourthWatch02,
        slider03: fourthWatch03,
        slider04: fourthWatch04,
    },
]

const ProductCard = () => {
    return ( <> {
        productData.map((item, index) => (
            <Card>
                <Link>
                    <div className='product__wishlist'>
                        <AiOutlineHeart className='wishlist-item'/>
                    </div>
                    <div className="card__thumbnail">
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y]}
                            slidesPerView={1}
                            navigation
                            speed={700}
                            pagination={{
                            clickable: true
                        }}
                            scrollbar={{
                            draggable: true
                        }}>
                            <SwiperSlide>
                                <Card.Img variant="top" src={item.slider01}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card.Img variant="top" src={item.slider02}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card.Img variant="top" src={item.slider03}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card.Img variant="top" src={item.slider04}/>
                            </SwiperSlide>
                        </Swiper>
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
        ))
    } </>
    )
}

export default ProductCard