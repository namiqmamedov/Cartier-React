import React, {useState} from 'react'
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
import {MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane} from 'mdb-react-ui-kit';

const navLinks = [
    {
        display: 'HIGH JEWELRY',
        title01: 'MARKERS OF STYLE',
        title02: 'ICONIC PANTHERE',
        title03: 'LIVING LEGACY',
        title04: 'EXCEPTIONAL STONES',
        title05: 'KNOW-HOW',
        title06: 'DISCOVER IN BOUTIQUES',
        img01: mega01,
        img02: mega02,
        img03: mega03,
        img04: mega04,
        img05: mega05,
        img06: mega06,
        img07: mega07,
        img08: mega08,
        img09: mega09,
        img10: mega10,
        img11: mega11,
        img12: mega12,
        // img13: mega12,
        // img14: mega12,
        // img15: mega12,
        // img16: mega12,
        // img17: mega12,
        // img18: mega12,
        // img19: mega12,
        // img20: mega12,
    },
    {
        display: 'JEWELRY',
        title01: 'ALL COLLECTION',
        title02: 'BRACELETS',
        title03: 'RINGS',
        title04: 'NECKLACES',
        title05: 'EARRINGS',
        title06: 'ENGAGEMENT RINGS',
        title07: 'WEDDING BANDS',
        
    },
    {
        display: 'WATCHES',
        title01: 'COLLECTIONS',
        title02: 'CHOOSE YOUR WATCH',
        title03: 'CARTIER WATCHMAKING',  
    },
    {
        display: 'ART OF LIVING',
        title01: 'BAGS',
        title02: 'PERSONAL ACCESSORIES',
        title03: 'HOME',
        title04: 'WRITING & STATIONERY',
        title05: 'EYEWEAR',
        title06: 'FRAGRANCES',
    },
    {
        display: 'NEWS',
    },
    {
        display: 'LA MAISON',
        title01: 'THE CULTURE OF DESIGN',
        title02: 'THE STORY',
        title03: 'SAVOIR-FAIRE & TRANSMISSION',
        title04: 'CARTIERS COMMITMENTS',
    },
]

const Header = () => {

    const [basicActive,
        setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };
    
    return ( <> <header>
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
                                        <a href="#" class="menu-link menu-bar-link">WATCHES AND WONDERS</a>
                                    </li>             
                                    {navLinks.map((item,index) => (
                                        <li>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">{item.display}</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <MDBTabs className='mb-3'>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab1')}
                                                                    active={basicActive === 'tab1'}>
                                                                    {item.title01}
                                                                </MDBTabsLink>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab2')}
                                                                    active={basicActive === 'tab2'}>
                                                                    {item.title02}
                                                                </MDBTabsLink>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab3')}
                                                                    active={basicActive === 'tab3'}>
                                                                    {item.title03}
                                                                </MDBTabsLink>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab4')}
                                                                    active={basicActive === 'tab4'}>
                                                                    {item.title04}
                                                                </MDBTabsLink>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab5')}
                                                                    active={basicActive === 'tab5'}>
                                                                    {item.title05}
                                                                </MDBTabsLink>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab6')}
                                                                    active={basicActive === 'tab6'}>
                                                                    {item.title06}
                                                                </MDBTabsLink>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab7')}
                                                                    active={basicActive === 'tab7'}>
                                                                    {item.title07}
                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                        </MDBTabs>
                                                        <MDBTabsContent>
                                                            <MDBTabsPane show={basicActive === 'tab1' }>
                                                            <div className="mega-item">
                                                                    <img src={item.img01} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            <div className="mega-item">
                                                                    <img src={item.img02} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            <div className="mega-item">
                                                                    <img src={item.img03} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            <div className="mega-item">
                                                                    <img src={item.img04} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                    
                                                            </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab2' }>
                                                            <div className="mega-item">
                                                                    <img src={item.img05} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            <div className="mega-item">
                                                                    <img src={item.img06} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            <div className="mega-item">
                                                                    <img src={item.img07} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            <div className="mega-item">
                                                                    <img src={item.img08} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            
        
                                                            </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab3' }>
                                                            <div className="mega-item">
                                                                    <img src={item.img09} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            <div className="mega-item">
                                                                    <img src={item.img10} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            <div className="mega-item">
                                                                    <img src={item.img11} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            <div className="mega-item">
                                                                    <img src={item.img12} alt="" />
                                                                    <span className='nav-title'>Beautes Du Monde</span>
                                                            </div>
                                                            </MDBTabsPane>
                                                        </MDBTabsContent>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mobile-menu-back-item">
                                                <a href="javascript:void(0);" class="menu-link mobile-menu-back-link">Back</a>
                                            </li>
                                        </ul>
                                    </li>
                                    ))}
                                    {/* <li>
                                        <a
                                            href="javascript:void(0);"
                                            class="menu-link menu-bar-link"
                                            aria-haspopup="true">JEWELRY</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <MDBTabs className='mb-3'>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab1')}
                                                                    active={basicActive === 'tab1'}>
                                                                    Tab 1

                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab2')}
                                                                    active={basicActive === 'tab2'}>
                                                                    Tab 2
                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab3')}
                                                                    active={basicActive === 'tab3'}>
                                                                    Tab 3
                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                        </MDBTabs>

                                                        <MDBTabsContent>
                                                            <MDBTabsPane show={basicActive === 'tab1' }>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega03} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                
                                                                </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab2'}>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega03} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab3'}>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                </MDBTabsPane>
                                                        </MDBTabsContent>
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
                                            aria-haspopup="true">WATCHES</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <MDBTabs className='mb-3'>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab1')}
                                                                    active={basicActive === 'tab1'}>
                                                                    Tab 1

                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab2')}
                                                                    active={basicActive === 'tab2'}>
                                                                    Tab 2
                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab3')}
                                                                    active={basicActive === 'tab3'}>
                                                                    Tab 3
                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                        </MDBTabs>

                                                        <MDBTabsContent>
                                                            <MDBTabsPane show={basicActive === 'tab1' }>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega03} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                
                                                                </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab2'}>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega03} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab3'}>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                </MDBTabsPane>
                                                        </MDBTabsContent>
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
                                            aria-haspopup="true">ART OF LIVING</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <MDBTabs className='mb-3'>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab1')}
                                                                    active={basicActive === 'tab1'}>
                                                                    Tab 1

                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab2')}
                                                                    active={basicActive === 'tab2'}>
                                                                    Tab 2
                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab3')}
                                                                    active={basicActive === 'tab3'}>
                                                                    Tab 3
                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                        </MDBTabs>

                                                        <MDBTabsContent>
                                                            <MDBTabsPane show={basicActive === 'tab1' }>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega03} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                
                                                                </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab2'}>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega03} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab3'}>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                </MDBTabsPane>
                                                        </MDBTabsContent>
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
                                            aria-haspopup="true">NEWS</a>
                                        <ul class="mega-menu mega-menu--flat">
                                            <li>
                                                <ul class="menu menu-list">
                                                    <li>
                                                        <MDBTabs className='mb-3'>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab1')}
                                                                    active={basicActive === 'tab1'}>
                                                                    Tab 1

                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab2')}
                                                                    active={basicActive === 'tab2'}>
                                                                    Tab 2
                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                            <MDBTabsItem>
                                                                <MDBTabsLink
                                                                    onMouseEnter={() => handleBasicClick('tab3')}
                                                                    active={basicActive === 'tab3'}>
                                                                    Tab 3
                                                                </MDBTabsLink>
                                                            </MDBTabsItem>
                                                        </MDBTabs>

                                                        <MDBTabsContent>
                                                            <MDBTabsPane show={basicActive === 'tab1' }>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega03} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                
                                                                </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab2'}>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega03} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                </MDBTabsPane>
                                                            <MDBTabsPane show={basicActive === 'tab3'}>
                                                            <div className="mega-item">
                                                                    <img src={mega01} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                    <div className="mega-item">
                                                                    <img src={mega02} alt="" />
                                                                    <h3>TANK</h3>
                                                                    </div>
                                                                </MDBTabsPane>
                                                        </MDBTabsContent>
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
                                            aria-haspopup="true">LA MAISON</a>
                                        <ul class="mega-menu mega-menu--multiLevel">
                                            <li>
                                                <a
                                                    href="javascript:void(0);"
                                                    class="menu-link mega-menu-link"
                                                    aria-haspopup="true">1.1 Flyout link</a>
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
                                                    aria-haspopup="true">1.2 Flyout link</a>
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
                                                    aria-haspopup="true">1.3 Flyout link</a>
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
                                    </li>                             */}
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
    </header> </>
       

       

    )
}

export default Header