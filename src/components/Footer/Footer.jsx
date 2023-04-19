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
import '../../styles/footer.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import bottomImg from '../../assets/images/footer_tm.svg'
import partner01 from '../../assets/images/footerPartner01.webp'
import partner02 from '../../assets/images/footerPartner02.png'
import partner03 from '../../assets/images/footerPartner03.png'
import {BsInstagram} from 'react-icons/bs';
import {ImFacebook} from 'react-icons/im';
import {BsTwitter} from 'react-icons/bs';
import {TfiYoutube} from 'react-icons/tfi';
import {FaPinterestP} from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import Module from '../../components/UI/module-item/Module';


const Footer = () => {
    return (
        <>
        <div className="module-container">
            <Module/>
        </div>
        <footer>
            <div className="footer-banner text-center">
                <form action="#" method='post'>
                    <div className="subscribe__main-index">
                        <p className="subscribe__banner-title">
                            Subscribe to our Newsletter
                        </p>
                        <TextField
                            id="standard-basic"
                            placeholder='your@email.com'
                            label="Email"
                            variant="standard"/>
                        <Button variant="outlined">SUBSCRIBE</Button>
                    </div>
                </form>
            </div>
            <Container>
                <Row>
                    <div className="footer-index">
                        <div className="footer-main">
                            <div className="router-wrapper">
                                <div className="router-index">
                                    <h2 className="router-title">CUSTOMER CARE</h2>
                                    <div className="router-item">
                                        <ul>
                                            <li>
                                                <Link>
                                                    CONTACT US
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CALL NOW: 800 227 8437
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CHECK ORDER
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    BOOK AN APPOINTMENT
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="router-index">
                                    <h2 className="router-title">OUR COMPANY</h2>
                                    <div className="router-item">
                                        <ul>
                                            <li>
                                                <Link>
                                                    FIND A BOUTIQUE
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CAREERS
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CARTIER AND CORPORATE SOCIAL RESPONSIBILITY
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="router-index">
                                    <h2 className="router-title">LEGAL AREA</h2>
                                    <div className="router-item">
                                        <ul>
                                            <li>
                                                <Link>
                                                    TERMS OF USE
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    PRIVACY POLICY
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CONDITIONS OF SALE
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CONDITIONS OF SALE PAY-BY-LINK
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CREDITS
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    ACCESSIBILITY STATEMENT
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="router-title">CUSTOMER CARE</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="router-index">
                                            <div className="router-item">
                                                <ul>
                                                    <li>
                                                        <Link>
                                                            CONTACT US
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link>
                                                            CALL NOW: 800 227 8437
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link>
                                                            FAQ
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link>
                                                            CHECK ORDER
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link>
                                                            BOOK AN APPOINTMENT
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="router-title">OUR COMPANY</Accordion.Header>
                                    <Accordion.Body>
                                    <div className="router-index">
                                    <div className="router-item">
                                        <ul>
                                            <li>
                                                <Link>
                                                    FIND A BOUTIQUE
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CAREERS
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CARTIER AND CORPORATE SOCIAL RESPONSIBILITY
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className="router-title">LEGAL AREA</Accordion.Header>
                                    <Accordion.Body>
                                    <div className="router-index">
                                    <div className="router-item">
                                        <ul>
                                            <li>
                                                <Link>
                                                    TERMS OF USE
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    PRIVACY POLICY
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CONDITIONS OF SALE
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CONDITIONS OF SALE PAY-BY-LINK
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    CREDITS
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    ACCESSIBILITY STATEMENT
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className="social-link">
                                <h2 className='router-title'>FOLLOW US</h2>
                                <ul>
                                    <li>
                                        <a href="#" target='_blank'>
                                            <BsInstagram/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'>
                                            <ImFacebook/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'>
                                            <BsTwitter/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'>
                                            <TfiYoutube/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'>
                                            <FaPinterestP/>
                                        </a>
                                    </li>
                                </ul>
                                <div className="footer-bottom">
                                    <img src={bottomImg} alt="footer image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-partners">
                        <div className="partner-content">
                            <a href="#">
                                <img src={partner01}/>
                            </a>
                            <a href="#">
                                <img src={partner02}/>
                            </a>
                            <a href="#">
                                <img src={partner03}/>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
            <div className="footer-secondary">
                <Container>
                    <Row>
                        <div className="secondary-content">
                            <span>
                                SHOP IN: UNITED STATES
                            </span>
                            <span>
                                COPYRIGHT © 2023 CARTIER
                            </span>
                        </div>
                    </Row>
                </Container>
            </div>
        </footer>
        </>
    )
}

export default Footer