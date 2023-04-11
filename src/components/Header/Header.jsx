import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import '../../styles/header.css'
import logo from '../../assets/images/Logo.png'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiMapPin2Line} from 'react-icons/ri'
import {BsBag} from 'react-icons/bs'
import mega01 from '../../assets/images/mega01.jpg'
import mega02 from '../../assets/images/mega02.webp'
import mega03 from '../../assets/images/mega03.webp'
import mega04 from '../../assets/images/mega04.webp'
import mega05 from '../../assets/images/mega05.webp'
import mega06 from '../../assets/images/mega06.webp'
import mega07 from '../../assets/images/mega07.webp'
import mega08 from '../../assets/images/mega08.webp'
import mega09 from '../../assets/images/mega09.webp'
import mega10 from '../../assets/images/mega10.webp'
import mega11 from '../../assets/images/mega11.webp'
import mega12 from '../../assets/images/mega12.webp'
import mega13 from '../../assets/images/mega13.webp'
import mega14 from '../../assets/images/mega14.webp'
import mega15 from '../../assets/images/mega15.webp'
import mega16 from '../../assets/images/mega16.webp'
import megaWatch01 from '../../assets/images/megaWatch01.webp'
import megaWatch02 from '../../assets/images/megaWatch02.webp'
import megaWatch03 from '../../assets/images/megaWatch03.webp'
import megaWatch04 from '../../assets/images/megaWatch04.webp'
import megaWatch05 from '../../assets/images/megaWatch05.webp'

const Header = () => {
    return ( 
    <>
    
   
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
                                    </li>
                                    <li className='mega-menu-content'>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">HIGH JEWELRY</a>
                                        <ul>
                                                <li >
                                                    <a href="#">LATEST COLLECTIONS</a>
                                                    <ul>
                                                        <li className='active'>
                                                        <div className="tababa">
                                                            <div className="tab-content">
                                                                <img src={mega01} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega02} alt="" />
                                                                <span>INDOMPTABLES DE CARTIER</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega03} alt="" />
                                                                <span>SIXIEME SENS PAR CARTIER</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega04} alt="" />
                                                                <span>CLASH UNLIMITED</span>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                
                                                <li>
                                                    <a href="#">MARKERS OF STYLE</a>
                                                    <ul>
                                                        <li>
                                                        <div className="tababa">

                                                            <div className="tab-content">
                                                                <img src={mega05} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega06} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega07} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega08} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="#">MARKERS OF STYLE</a>
                                                    <ul>
                                                        <li>
                                                           <div className="tababa">
                                                           <div className="tab-content">
                                                                <img src={mega09} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega10} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                           </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                        </ul>
                                    </li>
                                    <li className='mega-menu-content'>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">JEWELRY</a>
                                        <ul>
                                                <li >
                                                    <a href="#">ALL COLLECTIONS</a>
                                                    <ul>
                                                        <li className='active'>
                                                        <div className="tababa">
    
                                                            <div className="tab-content">
                                                                <img src={mega11} alt="" />
                                                                <span>INDOMPTABLES DE CARTIER</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega12} alt="" />
                                                                <span>SIXIEME SENS PAR CARTIER</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega13} alt="" />
                                                                <span>CLASH UNLIMITED</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega14} alt="" />
                                                                <span>CLASH UNLIMITED</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega15} alt="" />
                                                                <span>CLASH UNLIMITED</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega16} alt="" />
                                                                <span>CLASH UNLIMITED</span>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                
                                                <li>
                                                    <a href="#">MARKERS OF STYLE</a>
                                                    <ul>
                                                        <li>
                                                        <div className="tababa">

                                                            <div className="tab-content">
                                                                <img src={mega05} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega06} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega07} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={mega08} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="#">MARKERS OF STYLE</a>
                                                    <ul>
                                                        <li>
                                                           <div className="tababa">
                                                           <div className="tab-content">
                                                                <img src={mega09} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                           </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                        </ul>
                                    </li>
                                    <li className='mega-menu-content'>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">WATCHES</a>
                                        <ul>
                                                <li >
                                                    <a href="#">ALL COLLECTIONS</a>
                                                    <ul>
                                                        <li className='active'>
                                                        <div className="tababa">
                                                            <div className="tab-content">
                                                                <img src={megaWatch01} alt="" />
                                                                <span>BEAUTES DU MONDE</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={megaWatch02} alt="" />
                                                                <span>INDOMPTABLES DE CARTIER</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={megaWatch03} alt="" />
                                                                <span>SIXIEME SENS PAR CARTIER</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={megaWatch04} alt="" />
                                                                <span>CLASH UNLIMITED</span>
                                                            </div>
                                                            <div className="tab-content">
                                                                <img src={megaWatch05} alt="" />
                                                                <span>CLASH UNLIMITED</span>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>
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


    </>
       

       

    )
}

export default Header