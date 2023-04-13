import React from 'react'
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Media
} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/home.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import mainImg01 from '../assets/images/mainModule01.webp'
import mainImg02 from '../assets/images/mainModule02.webp'
import mainImg03 from '../assets/images/mainModule03.webp'
import moduleCenter01 from '../assets/images/moduleCenter01.webp'
import cardImg01 from '../assets/images/cardImg01.jpg'
import cardImg02 from '../assets/images/cardImg02.jpg'
import cardImg03 from '../assets/images/cardImg03.jpg'
import cardImg04 from '../assets/images/cardImg04.jpg'
import cardImg05 from '../assets/images/cardImg05.jpg'
import moduleImg01 from '../assets/images/shipping.svg'
import moduleImg02 from '../assets/images/returns.svg'
import moduleImg03 from '../assets/images/gift_wrapping.svg'
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css'

const Home = () => {
    return ( <> <main>
        <Container>
            <Row>
                <div className="hero-index">
                    <div class="youtube-player pristine" data-video-id="FiSxg_LNEFU">
                        <iframe
                            width="640"
                            height="360"
                            src="https://www.youtube.com/embed/GrwwrEBB5h8?controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&hl=en&playsinline=true&enablejsapi=1&origin=https%3A%2F%2Fwww.cartier.com&widgetid=1"
                            title="Cartier main video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                    <div className="main-content mt-3">
                        <h2 className='title'>
                            A Film, A Fragrance, A Panther</h2>
                        <p>
                            Starring Vanessa Kirby, the latest La Panthère de Cartier film captures the
                            irresistible olfactory power of this floral-feline accord.</p>
                        <div className="link-actions">
                            <Link>
                                Discover
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="module-grid__item">
                    <div className="module-thumbnail">
                        <Link>
                            <img src={mainImg01} alt=""/>
                        </Link>
                    </div>
                    <div className="main-content mt-3">
                        <h2 className='title'>
                            Clash de Cartier</h2>
                        <p>

                            Doubling down on the design's own philosophy, the latest Clash de Cartier
                            creations amplify the dualities within the Maison's codes.</p>
                        <div className="link-actions">
                            <Link>
                                Shop the collection
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="module-grid__item">
                    <div className="module-thumbnail">
                        <Link>
                            <img src={mainImg02} alt=""/>
                        </Link>
                    </div>
                    <div className="main-content mt-3">
                        <h2 className='title'>
                            Clash de Cartier</h2>
                        <p>

                            Doubling down on the design's own philosophy, the latest Clash de Cartier
                            creations amplify the dualities within the Maison's codes.</p>
                        <div className="link-actions">
                            <Link>
                                Shop the collection
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="module-grid__item">
                    <div className="module-thumbnail">
                        <Link>
                            <img src={mainImg03} alt=""/>
                        </Link>
                    </div>
                    <div className="main-content mt-3">
                        <h2 className='title'>
                            Clash de Cartier</h2>
                        <p>

                            Doubling down on the design's own philosophy, the latest Clash de Cartier
                            creations amplify the dualities within the Maison's codes.</p>
                        <div className="link-actions">
                            <Link>
                                Shop the collection
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="module-center__item">
                    <Container>
                        <Row>
                            <div className="card-media">
                                <div className="module-thumbnail col-lg-6">
                                    <img src={moduleCenter01} alt="module image"/>
                                </div>
                                <div className="module-content col-lg-6">
                                    <h1>
                                        Exhibition Closing Soon
                                    </h1>
                                    <span>
                                        The Fondation Cartier pour l’art contemporain and The Shed present the North
                                        American debut of The Yanomami Struggle, a comprehensive exhibition dedicated to
                                        the collaboration between artist and activist Claudia Andujar and the Yanomami
                                        people, one of the largest Indigenous groups living in Amazonia today. On view
                                        through April 16, 2023.​
                                    </span>
                                    <div className="link-actions">
                                        <Link>
                                            Plan your visit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>

                <div className="main__card-item mt-5">
                    <h2 className='title text-center'>ENTER THE WORLD OF CARTIER</h2>
                    <p className='subtitle text-center'>
                        Free-spirited, legendary and forever enchanting.
                    </p>
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={30}
                        slidesPerView={3.4}
                        navigation>
                        <SwiperSlide>
                            <div class="card-index">
                                <img className='image' id='img-card' src={cardImg01} alt=""/>
                                <figcaption>
                                    <h3>DISCOVER</h3>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card-index">
                                <img className='image' id='img-card' src={cardImg02} alt=""/>
                                <figcaption>
                                    <h3>DISCOVER</h3>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card-index">
                                <img className='image' id='img-card' src={cardImg03} alt=""/>
                                <figcaption>
                                    <h3>DISCOVER</h3>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card-index">
                                <img className='image' id='img-card' src={cardImg04} alt=""/>
                                <figcaption>
                                    <h3>DISCOVER</h3>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card-index">
                                <img className='image' id='img-card' src={cardImg05} alt=""/>
                                <figcaption>
                                    <h3>DISCOVER</h3>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card-index">
                                <img className='image' id='img-card' src={cardImg05} alt=""/>
                                <figcaption>
                                    <h3>DISCOVER</h3>
                                </figcaption>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Row>
        </Container>

        <div className="module-container">
            <Link className="module-item">
                <img src={moduleImg01} alt="module image"/>
                <div className="module-title">
                    <Link>Complimentary Delivery</Link>
                </div>
            </Link>
        </div>

        <div className="footer-banner text-center">
            <Container>
                <Row>
                  <form action="#" method='post'>
                  <div className="subscribe__main-index">
                   <p className="subscribe__banner-title">
                        Subscribe to our Newsletter
                    </p>
                    <TextField id="standard-basic" placeholder='your@email.com' label="Email" variant="standard"/>
                    <Button variant="outlined">SUBSCRIBE</Button>
                   </div>
                  </form>
                </Row>
            </Container>
        </div>

    </main>
     </>
    )
}

export default Home