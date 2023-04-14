import React from 'react'
import mainModule03 from '../assets/images/mainModule03.webp'
import {Container, Row, Col} from 'reactstrap'
import '../styles/product.css'

const Product = () => {
  return (
    <>
        <div className="product__top">
            <div className="product-content d-flex">
                <Col lg='6' className="thumbnail">
                    <img src={mainModule03} alt="Product Content Image" />
                </Col>
                <Col lg='6' className="text-main">
                    <div className="wrapper-card">
                        <h1>TANK</h1>
                        <div className='description'>
                            <p>The Tank watch was created by Louis Cartier, who designed it after the tanks of WWI battlefields. Defined by flat vertical brancards and a sapphire cabochon, this symbol of understated elegance has since captivated the world's most astute minds.</p>
                        </div>
                    </div>
                </Col>
            </div>
        </div>
        
    </>
  )
}

export default Product