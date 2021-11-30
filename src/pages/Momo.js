import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import MomoContainer from '../Components/MomoContainer/MomoContainer'

const Momo = () => {
    return (
        <div>
            <Helmet>
                <title>Momo</title>
            </Helmet>
            <BreadCrumbs page="Momo"/>
            <MomoContainer/>
        </div>
    )
}

export default Momo;
