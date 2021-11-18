import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import GourmetContainer from '../Components/GourmetContainer/GourmetContainer'

const Groceries = () => {
    return (
        <div>
            <Helmet>
                <title>Groceries</title>
            </Helmet>
            <BreadCrumbs page="Groceries"/>
            <GourmetContainer/>
        </div>
    )
}

export default Groceries
