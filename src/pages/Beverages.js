import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import GourmetContainer from '../Components/GourmetContainer/GourmetContainer'

const Beverages = () => {
    return (
        <div>
            <Helmet>
                <title>Beverages</title>
            </Helmet>
            <BreadCrumbs page="Beverages"/>
            <GourmetContainer/>
        </div>
    )
}

export default Beverages
