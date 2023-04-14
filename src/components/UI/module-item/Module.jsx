import React from 'react'
import moduleImg01 from '../../../assets/images/shipping.svg'
import moduleImg02 from '../../../assets/images/returns.svg'
import moduleImg03 from '../../../assets/images/gift_wrapping.svg'
import {Link} from 'react-router-dom'


const moduleData = [
    {
        display: 'Complimentary Delivery',
        imgUrl: moduleImg01
    }, {
        display: 'EASY RETURN OR EXCHANGE',
        imgUrl: moduleImg02
    }, {
        display: 'FREE GIFT WRAPPING',
        imgUrl: moduleImg03
    }
]

const Module = () => {
    return <>
                {moduleData.map((item, index) => (
                    <Link className="module-item">
                <img src={item.imgUrl} alt="module image"/>
                <div className="module-title">
                    <Link>{item.display}</Link>
                </div>
            </Link>
                ))}
        </>
}

export default Module