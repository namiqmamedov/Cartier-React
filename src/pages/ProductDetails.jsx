import React from 'react'
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

const ProductDetails = ({item}) => {

    return ( <>
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
    <div className = "product-detail-index"> 
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
                    <span>Tank Française watch, medium model, quartz movement. Steel case. Faceted crown in steel decorated with a synthetic cabochon-shaped spinel. Silvered dial, blued-steel sword-shaped hands, sapphire crystal. Steel bracelet. Case dimensions: 32 mm x 27 mm, thickness: 7.1 mm. Water-resistant to 3 bar (approx. 30 meters/100 feet).</span>
                    </div>
                </div>
            </div>
        </div>
    </div> </div>
        </>)
}

export default ProductDetails