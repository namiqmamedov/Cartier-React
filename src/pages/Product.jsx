import React from 'react'
import mainModule03 from '../assets/images/mainModule03.webp'
import {Container, Row, Col} from 'reactstrap'
import '../styles/product.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {BsFillGridFill} from 'react-icons/bs'
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {IoIosArrowDown} from 'react-icons/io'
import ProductCard from '../components/UI/product-card/ProductCard';
import Accordion from 'react-bootstrap/Accordion';

const label = {
    inputProps: {
        'aria-label': 'Checkbox demo'
    }
};

const Product = () => {

    return ( <> <div className="product__top">
        <div className="product-content d-flex">
            <Col lg='6' className="thumbnail">
                <img src={mainModule03} alt="Product Content Image"/>
            </Col>
            <Col lg='6' className="text-main">
                <div className="wrapper-card">
                    <h1>TANK</h1>
                    <div className='description'>
                        <p>The Tank watch was created by Louis Cartier, who designed it after the tanks
                            of WWI battlefields. Defined by flat vertical brancards and a sapphire cabochon,
                            this symbol of understated elegance has since captivated the world's most astute
                            minds.</p>
                    </div>
                </div>
            </Col>
        </div>
    </div> < div className = "product__main-item" > <Container>
        <Row>
            <div className="product__first-element">
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
                <div className="product-model">
                    <div className="product-count">
                        <span>52 Models</span>
                    </div>
                </div>
                <button className='product-wrapper'>
                    <span>
                        GRID
                        <BsFillGridFill className='grid'/>
                    </span>
                    <span>FEED
                        <Checkbox {...label}/>
                    </span>
                </button>
            </div>
            <div className="product-index">
                <div className="product__filter col-lg-3">
                    <div className="filter__model">
                        SORT BY
                        <div className='filter-select'>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group">
                                    <FormControlLabel
                                        value="LowToHigh"
                                        control={< Radio />}
                                        label="PRICE LOW TO HIGH"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='filter-select'>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group">
                                    <FormControlLabel
                                        value="HighToLow"
                                        control={< Radio />}
                                        label="PRICE HIGH TO LOW"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='filter-select'>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group">
                                    <FormControlLabel value="Recommended" control={< Radio />} label="RECOMMENDED"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="filter__model">
                        FILTER BY
                        <div className='filter-select'>
                            <FormControl>
                                <FormControlLabel control={< Checkbox />} label="AVAILABLE ONLINE"/>
                                <FormControlLabel control={< Checkbox />} label="NEW"/>
                            </FormControl>

                        </div>
                    </div>
                    <div className="filter__model">

                        <div className='filter-select'>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>SELECTION FOR</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='filter-select'>
                                            <FormControl>
                                                <FormControlLabel control={< Checkbox />} label="HER"/>
                                                <FormControlLabel control={< Checkbox />} label="HIM"/>
                                            </FormControl>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>          
                        </div>
                    </div>
                     <div className="filter__model">
                        <div className='filter-select'>
                             <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>CASE MATERIAL</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='filter-select'>
                                        <FormControl>
                                                <FormControlLabel control={< Checkbox />} label="ROSE GOLD"/>
                                                <FormControlLabel control={< Checkbox />} label="YELLOW GOLD"/>
                                                <FormControlLabel control={< Checkbox />} label="STEEL"/>
                                                <FormControlLabel control={< Checkbox />} label="GOLD AND STEEL"/>
                                            </FormControl>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="filter__model">
                        <div className='filter-select'>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>WATCH SHAPE</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='filter-select'>
                                        <FormControl>
                                                <FormControlLabel control={< Checkbox />} label="SQUARE"/>
                                                <FormControlLabel control={< Checkbox />} label="RECTANGULAR"/>
                                            </FormControl>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="filter__model">
                        <div className='filter-select'>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>CASE MATERIAL</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='filter-select'>
                                        <FormControl>
                                                <FormControlLabel control={< Checkbox />} label="AUTOMATIC WINDING"/>
                                                <FormControlLabel control={< Checkbox />} label="MANUAL WINDING"/>
                                                <FormControlLabel control={< Checkbox />} label="QUARTZ"/>
                                            </FormControl>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="filter__model">
                        <div className='filter-select'>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> BRACELET / STRAP</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='filter-select'>
                                        <FormControl>
                                                <FormControlLabel control={< Checkbox />} label="LEATHER"/>
                                                <FormControlLabel control={< Checkbox />} label="METAL"/>
                                                <FormControlLabel control={< Checkbox />} label="INTERCHANGEABLE LEATHER"/>
                                        </FormControl>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="filter__model">
                        <div className='filter-select'>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>CASE SIZE</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='filter-select'>
                                        <FormControl>
                                                <FormControlLabel control={< Checkbox />} label="LARGE MODEL"/>
                                                <FormControlLabel control={< Checkbox />} label="MEDIUM MODEL"/>
                                                <FormControlLabel control={< Checkbox />} label="SMALL MODEL"/>
                                            </FormControl>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="filter__model">
                        <div className='filter-select'>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>SUB-COLLECTION</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='filter-select'>
                                        <FormControl>
                                                <FormControlLabel control={< Checkbox />} label="TANK MUST"/>
                                                <FormControlLabel control={< Checkbox />} label="TANK AMÉRICAINE"/>
                                                <FormControlLabel control={< Checkbox />} label="TANK FRANÇAISE"/>
                                                <FormControlLabel control={< Checkbox />} label="TANK LOUIS CARTIER"/>
                                            </FormControl>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div> 
                </div>
                <div className="product__main col-lg-9">
                    <ProductCard/>
                </div>
            </div>
        </Row>
    </Container> </div>

    </>)
}

export default Product