import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import Questions from '../Components/Questions/Questions'

const FAQ = () => {
    return (
        <div>
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            <BreadCrumbs page="FAQ"/>
            <Questions/>
        </div>
    )
}

export default FAQ
