import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import SandwichContainer from '../Components/SandwichContainer/SandwichContainer'

const Sandwich = () => {
    return (
        <div>
            <Helmet>
                <title>Sandwich</title>
            </Helmet>
            <BreadCrumbs page="Sandwich"/>
            <SandwichContainer/>
        </div>
    )
}

export default Sandwich
