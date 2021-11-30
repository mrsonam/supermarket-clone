import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import GourmetContainer from '../Components/PizzaContainer/PizzaContainer'

const Household = () => {
    return (
        <div>
            <Helmet>
                <title>Household</title>
            </Helmet>
            <BreadCrumbs page="Household"/>
            <GourmetContainer/>
        </div>
    )
}

export default Household
