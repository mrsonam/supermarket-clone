import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import RiceContainer from '../Components/RiceContainer/RiceContainer'

const Rice = () => {
    return (
        <div>
            <Helmet>
                <title>Rice</title>
            </Helmet>
            <BreadCrumbs page="Rice"/>
            <RiceContainer/>
        </div>
    )
}

export default Rice;
