import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import '../../styles/header.css'
import logo from '../../assets/images/Logo.png'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiMapPin2Line} from 'react-icons/ri'
import {BsBag} from 'react-icons/bs'

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <nav className='nav-index'>
                        {/* {nav_links.map((item,index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                        >
                            {item.display}
                        </NavLink>
                    ))} */}

                        <Col lg='3' className="nav-content-first">
                            <a href="#">
                                UNITED STATES
                            </a>
                            <a href="#">
                                CONTACT US
                            </a>
                            <a href="#">
                                SERVICES
                            </a>
                        </Col>

                        <Col lg='6' className="logo_index_web">
                            <a href="#">
                                <img className='logo-index' src={logo} alt=""/>
                            </a>
                        </Col>

                        <Col lg='3' className="nav-direction">
                            <AiOutlineHeart/>
                            <AiOutlineUser/>
                            <RiMapPin2Line/>
                            <BsBag/>
                        </Col>
                    </nav>
                </Row>
            </Container>
        </header>
    )
}

export default Header