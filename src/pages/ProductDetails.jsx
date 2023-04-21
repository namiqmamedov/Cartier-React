import React, {useState} from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ProductCard from '../components/UI/product-card/ProductCard';
import firstWatch01 from '../assets/images/product/watch/watch001.avif'
import firstWatch02 from '../assets/images/product/watch/watch002.avif'
import firstWatch03 from '../assets/images/product/watch/watch003.avif'
import firstWatch04 from '../assets/images/product/watch/watch004.avif'
import firstWatch05 from '../assets/images/product/watch/watch005.avif'
import firstWatch06 from '../assets/images/product/watch/watch006.avif'
import firstWatch07 from '../assets/images/product/watch/watch007.avif'
import firstWatch08 from '../assets/images/product/watch/watch008.avif'
import firstWatch09 from '../assets/images/product/watch/watch009.avif'
import firstWatch010 from '../assets/images/product/watch/watch0010.avif'
import {IoIosArrowForward} from 'react-icons/io'
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
import {MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane} from 'mdb-react-ui-kit';
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

    return ( <> <div className="product-detail-index">
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
                        <h1 className='product-title'>TANK FRANÇAISE WATCH</h1>
                        <div className='prd-description'>
                            <span>Tank Française watch, medium model, quartz movement. Steel case. Faceted
                                crown in steel decorated with a synthetic cabochon-shaped spinel. Silvered dial,
                                blued-steel sword-shaped hands, sapphire crystal. Steel bracelet. Case
                                dimensions: 32 mm x 27 mm, thickness: 7.1 mm. Water-resistant to 3 bar (approx.
                                30 meters/100 feet).</span>
                        </div>
                        <MDBTabs className='mb-3'>
                            <MDBTabsItem>
                                <MDBTabsLink
                                    onClick={() => handleBasicClick('tab1')}
                                    active={basicActive === 'tab1'}>
                                    <span className='product-icon'></span>
                                    ADD ENGRAVING
                                    <IoIosArrowForward/>
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>

                        <MDBTabsContent>
                            <MDBTabsPane show={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
                            <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                            <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
                        </MDBTabsContent>
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
                            <ModalButton onClick={handleOpen}>SHARE</ModalButton>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> </>)
}

export default ProductDetails