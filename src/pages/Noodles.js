import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import NoodlesContainer from '../Components/NoodlesContainer/NoodlesContainer'

const Noodles = () => {
    return (
        <div>
            <Helmet>
                <title>Noodles</title>
            </Helmet>
            <BreadCrumbs page="Noodles"/>
            <NoodlesContainer/>
        </div>
    )
}

export default Noodles;
