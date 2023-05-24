import React from 'react'
import Home from '../pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={< Navigate to = '/home' />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/product-detail/:id' element={<ProductDetails/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}

export default Routers