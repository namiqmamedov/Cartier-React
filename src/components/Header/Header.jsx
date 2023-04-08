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
                    <div className="nav-index-top">
                        
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
                    </div>

                    
                    <div className="nav-main">
                        <div class="nav">
                            <nav>
                                <a href="javascript:void(0);" class="mobile-menu-trigger">Open mobile menu</a>
                                <ul class="menu menu-bar">
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">WATCHES AND WONDERS</a>
                                        <ul class="mega-menu mega-menu--multiLevel">
                                            <li>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="menu-link mega-menu-link"
                                                    aria-haspopup="true">
                                                    High Jewelry</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">1.1.1 Page link</a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="javascript:void(0);"
                                                            class="menu-link menu-list-link"
                                                            aria-haspopup="true">1.1.2 Flyout link</a>
                                                        <ul class="menu menu-list">
                                                            <li>
                                                                <a href="/page" class="menu-link menu-list-link">1.1.2.1 Page link</a>
                                                            </li>
                                                            <li>
                                                                <a href="/page" class="menu-link menu-list-link">1.1.2.2 Page link</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">1.1.3 Page link</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="menu-link mega-menu-link"
                                                    aria-haspopup="true">
                                                    JEWELRY</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">1.2.1 Page link</a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">1.2.2 Page link</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="menu-link mega-menu-link"
                                                    aria-haspopup="true">
                                                    WATCHES</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">1.3.1 Page link</a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">1.3.2 Page link</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/page" class="menu-link mega-menu-link">1.4 Page link</a>
                                            </li>
                                            <li class="mobile-menu-back-item">
                                                <a href="javascript:void(0);" class="menu-link mobile-menu-back-link">Back</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">HIGH JEWELRY</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <a href="/page" class="menu-link mega-menu-link mega-menu-header">2.1 Page link header</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">2.1.1 Page link</a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">2.1.2 Page link</a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">2.1.3 Page link</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/page" class="menu-link mega-menu-link mega-menu-header">2.2 Page link header</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">2.2.1 Page link</a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">2.2.2 Page link</a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">2.2.3 Page link</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/page" class="menu-link mega-menu-link mega-menu-header">2.3 Page link header</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">2.2.1 Page link</a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">2.2.2 Page link</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mobile-menu-back-item">
                                                <a href="javascript:void(0);" class="menu-link mobile-menu-back-link">Back</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">JEWELRY</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <a href="#" class="menu-link mega-menu-link mega-menu-header">3.1 Page link header</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.1 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-content">
                                                <p class="mega-menu-header">3.2 Page link header</p>
                                                <p>This is just static content. You can add anything here. Images, text,
                                                    buttons, your grandma's secrect recipe.</p>
                                            </li>
                                            <li class="mobile-menu-back-item">
                                                <a href="javascript:void(0);" class="menu-link mobile-menu-back-link">Back</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">WATCHES</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <a href="#" class="menu-link mega-menu-link mega-menu-header">3.1 Page link header</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.1 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-content">
                                                <p class="mega-menu-header">3.2 Page link header</p>
                                                <p>This is just static content. You can add anything here. Images, text,
                                                    buttons, your grandma's secrect recipe.</p>
                                            </li>
                                            <li class="mobile-menu-back-item">
                                                <a href="javascript:void(0);" class="menu-link mobile-menu-back-link">Back</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">ART OF LIVING</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <a href="#" class="menu-link mega-menu-link mega-menu-header">3.1 Page link header</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.1 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-content">
                                                <p class="mega-menu-header">3.2 Page link header</p>
                                                <p>This is just static content. You can add anything here. Images, text,
                                                    buttons, your grandma's secrect recipe.</p>
                                            </li>
                                            <li class="mobile-menu-back-item">
                                                <a href="javascript:void(0);" class="menu-link mobile-menu-back-link">Back</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">NEWS</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <a href="#" class="menu-link mega-menu-link mega-menu-header">3.1 Page link header</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.1 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-content">
                                                <p class="mega-menu-header">3.2 Page link header</p>
                                                <p>This is just static content. You can add anything here. Images, text,
                                                    buttons, your grandma's secrect recipe.</p>
                                            </li>
                                            <li class="mobile-menu-back-item">
                                                <a href="javascript:void(0);" class="menu-link mobile-menu-back-link">Back</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">LA MAISON</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <a href="#" class="menu-link mega-menu-link mega-menu-header">3.1 Page link header</a>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.1 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/page" class="menu-link menu-list-link">
                                                            3.1.2 Page link<br/>
                                                            <small>Short decription of link</small>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega-menu-content">
                                                <p class="mega-menu-header">3.2 Page link header</p>
                                                <p>This is just static content. You can add anything here. Images, text,
                                                    buttons, your grandma's secrect recipe.</p>
                                            </li>
                                            <li class="mobile-menu-back-item">
                                                <a href="javascript:void(0);" class="menu-link mobile-menu-back-link">Back</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="mobile-menu-header">
                                        <a href="/home" class="">
                                            <span>Home</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </nav>
                </Row>
            </Container>
        </header>
    )
}

export default Header