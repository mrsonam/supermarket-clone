import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import ContactContainer from '../Components/ContactContainer/ContactContainer'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <BreadCrumbs page="Contact"/>
            <ContactContainer/>
        </div>
    )
}

export default Contact
