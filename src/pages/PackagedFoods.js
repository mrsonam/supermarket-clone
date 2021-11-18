import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import GourmetContainer from '../Components/GourmetContainer/GourmetContainer'

const PackagedFoods = () => {
    return (
        <div>
            <Helmet>
                <title>Packaged Foods</title>
            </Helmet>
            <BreadCrumbs page="Packaged Foods"/>
            <GourmetContainer/>
        </div>
    )
}

export default PackagedFoods
