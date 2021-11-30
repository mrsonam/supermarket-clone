import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import PizzaContainer from '../Components/PizzaContainer/PizzaContainer'

const Pizza = () => {
    return (
        <div>
            <Helmet>
                <title>Pizza</title>
            </Helmet>
            <BreadCrumbs page="Pizza"/>
            <PizzaContainer/>
        </div>
    )
}

export default Pizza
