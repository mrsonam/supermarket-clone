import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import HealthyChoiceContainer from '../Components/HealthyChoiceContainer/HealthyChoiceContainer'

const HealthyChoice = () => {
    return (
        <div>
            <Helmet>
                <title>Healthy Choice</title>
            </Helmet>
            <BreadCrumbs page="Healthy Choice"/>
            <HealthyChoiceContainer/>
        </div>
    )
}

export default HealthyChoice;
