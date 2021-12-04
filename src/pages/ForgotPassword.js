import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import ForgotPasswordForm from '../Components/ForgotPasword/ForgotPasswordForm'

const ForgotPassword = () => {
    return (
        <div>
            <Helmet>
                <title>Forgot Password</title>
            </Helmet>
            <BreadCrumbs page="Reset Password"/>
            <ForgotPasswordForm/>
        </div>
    )
}

export default ForgotPassword
