import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Navigation, Scrollbar, A11y} from 'swiper';
import productData from '../../../data/products'
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
                        }}
                        >
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