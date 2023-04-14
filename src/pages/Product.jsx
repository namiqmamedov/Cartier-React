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
                <div className="product__filter col-lg-4">
                    <div className="filter__title">
                        SORT BY
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group">
                                <FormControlLabel value="male" control={< Radio />} label="Male"/>
                            </RadioGroup>
                        </FormControl>

                    </div>
                </div>
                <div className="product__main col-lg-4"></div>
            </div>
        </Row>
    </Container> 
    </div>

    </>)
}

export default Product