import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import Cart from '../Components/Cart/Cart';

const MyCart = () => {
    return (
        <div>
            <Helmet>
                <title>Checkout</title>
            </Helmet>
            <BreadCrumbs page="Checkout"/>
            <Cart/>
        </div>
    )
};

export default MyCart;
