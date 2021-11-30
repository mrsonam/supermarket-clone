import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import ChilliContainer from '../Components/ChilliContainer/ChilliContainer'

const Chilli = () => {
    return (
        <div>
            <Helmet>
                <title>Chilli</title>
            </Helmet>
            <BreadCrumbs page="Chilli"/>
            <ChilliContainer/>
        </div>
    )
}

export default Chilli
