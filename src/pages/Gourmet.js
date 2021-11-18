import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import GourmetContainer from '../Components/GourmetContainer/GourmetContainer'

const Gourmet = () => {
    return (
        <div>
            <Helmet>
                <title>Gourmet</title>
            </Helmet>
            <BreadCrumbs page="Gourmet"/>
            <GourmetContainer/>
        </div>
    )
}

export default Gourmet
