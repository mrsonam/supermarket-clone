import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import LoginForm from '../Components/LoginForm/LoginForm'

const Login = () => {
    return (
        <div>
            <BreadCrumbs page="Login Page"/>
            <LoginForm/>
        </div>
    )
}

export default Login
