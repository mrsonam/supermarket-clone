import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import GourmetContainer from '../Components/GourmetContainer/GourmetContainer'

const PersonalCare = () => {
    return (
        <div>
            <Helmet>
                <title>Personal Care</title>
            </Helmet>
            <BreadCrumbs page="Personal Care"/>
            <GourmetContainer/>
        </div>
    )
}

export default PersonalCare
