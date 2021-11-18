import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import ProductsContainer from '../Components/ProuctsContainer/ProductsContainer'

const Products = () => {
    return (
        <div>
            <Helmet>
                <title>Products</title>
            </Helmet>
            <BreadCrumbs page="Products"/>
            <ProductsContainer/>
        </div>
    )
}

export default Products
