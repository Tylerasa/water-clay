import React from 'react'
import ProductDetails from './Product Details/ProductDetails'
import ProductImage from './Product Image/ProductImage'

const ProductWrapper = () => {
    return (
        <div className="flex h-screen">
            <ProductImage/>
            <ProductDetails/>
        </div>
    )
}

export default ProductWrapper
