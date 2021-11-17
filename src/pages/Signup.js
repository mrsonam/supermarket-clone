import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import RegistrationForm from '../Components/RegistrationForm/RegistrationForm'
import { Helmet } from 'react-helmet'

const Signup = () => {
    return (
        <div>
            <Helmet>
                <title>Signup Page</title>
            </Helmet>
            <BreadCrumbs page="Register Page"/>
            <RegistrationForm/>
        </div>
    )
}

export default Signup
