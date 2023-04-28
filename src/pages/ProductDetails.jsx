import React, {useState,useEffect} from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {NavLink, Link} from 'react-router-dom'
import ProductCard  from '../components/UI/product-card/ProductCard';
import productData  from '../data/products';
import ProductRelated from '../components/UI/product-card/ProductRelated';
import firstWatch01 from '../assets/images/product/watch/watch001.avif'
import firstWatch02 from '../assets/images/product/watch/watch002.avif'
import firstWatch03 from '../assets/images/product/watch/watch003.avif'
import firstWatch04 from '../assets/images/product/watch/watch004.avif'
import firstWatch05 from '../assets/images/product/watch/watch005.avif'
import firstWatch06 from '../assets/images/product/watch/watch006.avif'
import firstWatch07 from '../assets/images/product/watch/watch007.avif'
import firstWatch08 from '../assets/images/product/watch/watch008.avif'
import firstWatch09 from '../assets/images/product/watch/watch009.avif'
import watch from '../assets/images/product/watch.webp'
import wrapper from '../assets/images/product/cartierProd.jpeg'
import panthere from '../assets/images/panthere.avif'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import {RiBookletLine} from 'react-icons/ri'
import {TbBuildingStore} from 'react-icons/tb'
import {FaFacebookF} from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsShare} from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalButton from '@mui/material/Button';
import '../styles/product-details.css'
import Typography from '@mui/material/Typography';

const ProductDetails = () => {

    const [basicActive,
        setBasicActive] = useState('');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    const [open,
        setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [collapse, setCollapse] = useState(false)

    const [showMore, setShowMore] = useState(false);

    
    // let yellow = '#ffc800';
    // const [bgColor, setBgColor] = useState(yellow);
    //  const changeColor =()=>{
    //     let purple = '#A020F0';
    //     setBgColor(purple);
    //   }


    return (
         <>
            <div className="product-detail-index">
        {/*         
            <h6>
        {showMore ? asdasdasdasdasddasasd : `${asdasdasdasdasddasasd.substring(0, 250)}`}
        <button className="btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
            </button>
        </h6> */}

        {/* <div className='dada' style={{background: bgColor}}>
            <button onClick={changeColor}>Change Color</button>
        </div> */}

                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                WATCHES
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                COLLECTIONS
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>TANK</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="product__detail d-flex">
                            <div className="product-thumbnail col-lg-7">
                                <div className="product-card">
                                    <img src={firstWatch01} alt="WATCH"/>
                                </div>
                                <div className="product-card">
                                    <img src={firstWatch02} alt="WATCH"/>
                                </div>
                                <div className="product-card">
                                    <img src={firstWatch03} alt="WATCH"/>
                                </div>
                                <div className="product-card">
                                    <img src={firstWatch04} alt="WATCH"/>
                                </div>
                                <div className="product-card">
                                    <img src={firstWatch05} alt="WATCH"/>
                                </div>
                                <div className="product-card">
                                    <img src={firstWatch06} alt="WATCH"/>
                                </div>
                                <div className="product-card">
                                    <img src={firstWatch07} alt="WATCH"/>
                                </div>
                                <div className="product-card">
                                    <img src={firstWatch08} alt="WATCH"/>
                                </div>
                                <div className="product-card">
                                    <img src={firstWatch09} alt="WATCH"/>
                                </div>
                            </div>
                            <div className="product-content col-lg-5">
                                <div className="product__content-index">
                                <h1 className='product-title'>TANK FRANÇAISE WATCH</h1>
                                <div className='prd-description'>
                                    <span className='description'>Tank Française watch, medium model, quartz movement. Steel case. Faceted
                                        crown in steel decorated with a s. 
                                        <span className={` description long-text ${collapse ? "expanded" : ""}`}>
                                        Silvered dial,
                                        blued-steel sword-shaped hands,
                                        sapphire crystal. Steel bracelet. Case
                                        dimensions: 32 mm x 27 mm, thickness: 7.1 mm. Water-resistant to 3 bar approx.
                                        30 meters/100 feet   
                                        </span>
                                        <span onClick={() => setCollapse((prev) => !prev)}>
                                            {collapse ? 'Read Less' : 'Read More'}
                                        </span>
                                    </span>   
                                </div>
                                <div className="product__price">
                                    <span className="price-sales">
                                        $3,700.00
                                    </span>
                                </div>
                                <div className="product__main-btn">
                                    <Button className='addToBag' variant="dark">ADD TO BAG</Button>
                                    <div className="wish-list-product">
                                        <AiOutlineHeart/>
                                    </div>
                                </div>
                                <div className="product__bottom-wrapper">
                                    <div className="product-link">
                                        <a href="tel:1-800-227-8437">
                                            <BsTelephone/>
                                            ORDER BY PHONE 1-800-227-8437
                                        </a>
                                    </div>
                                    <div className="product-link">
                                        <button>
                                            <TbBuildingStore/>
                                            FIND IN BOUTIQUE
                                        </button>
                                    </div>
                                    <div className="product-link">
                                        <a>
                                            <TfiHeadphoneAlt/>
                                            CONTACT AN AMBASSADOR
                                        </a>
                                    </div>
                                    <div className="product-link">
                                        <button>
                                            <RiBookletLine/>
                                            BOOK AN APPOINTMENT
                                        </button>
                                    </div>
                                </div>
                                <div className="product__footer">
                                    <ModalButton onClick={handleOpen}>
                                        <BsShare/>
                                        SHARE
                                    </ModalButton>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description">
                                        <Box>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                SHARE
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{
                                                mt: 2
                                            }}>
                                                <FaFacebookF/>
                                                <FaPinterestP/>
                                                <FaTwitter/>
                                                <AiOutlineMail/>
                                                <FaWhatsapp/>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                    <div className="product-code">
                                        Ref. WSTA0074
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product__detail-main">
                    <div className="container">
                        <div className="row">
                            <div className="content-wrapper col-lg-5">
                                <h1>Cartier Care</h1>
                                <div className="description">
                                    <p>Please enjoy an extension of the International Limited Warranty for up to 8 years and take advantage of a wide range of exclusive services.</p>
                                </div>
                                <div className="discover">
                                    <a href="#">
                                        Discover More
                                    </a>
                                </div>           
                            </div>
                            <div className="thumbnail col-lg-7">
                                <img src={watch} alt="watch" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product__wrapper">
                    <div className="gift__center col-lg-7">
                    <div className="thumbnail">
                        <img src={wrapper} alt="product wrapper image" />
                    </div>
                    <div className="gift-wrapping">
                        <h1 className='title'>       
                            Gift Wrapping
                        </h1>
                        <div className="description">
                            <p>
                            Send your presents in our signature packaging with a personalised greetings card included.
                            </p>
                        </div>
                        <Link>
                        Read More
                        </Link>
                    </div>  
                    </div>
                    <div className="return__center col-lg-5">
                        <h1 className='title'>       
                            SHIPPING / RETURN
                        </h1>
                        <div className="description">
                            <p>
                            We offer different delivery options. 
                            Choose the one you prefer at the checkout. You may return or exchange your Cartier creation within 30 days.
                            </p>
                        </div>
                        <Link>
                        Read More
                        </Link>
                    </div>                     
                </div>

                <div className="recommended-slot">
                    <h1 className='text-center mb-4'>You may also like</h1>
                        <div className="product__main col-lg-6 col-md-9 col-sm-6 col-xs-6">
                            <ProductRelated/>
                    </div>
                </div>

                <div className="brand__panthere image">
                    <div className="panthere">
                        <img src={panthere} alt="Panthere Image" />
                    </div>
                </div>
            </div> 
        </>
        )
}

export default ProductDetails