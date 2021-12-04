import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import LoginForm from '../Components/LoginForm/LoginForm'
import { Helmet } from 'react-helmet'

const Login = () => {
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken){
        window.location.href= "/profile"
    }else{
        return (
            <div>
                <Helmet>
                    <title>Login Page</title>
                </Helmet>
                <BreadCrumbs page="Login Page"/>
                <LoginForm/>
            </div>
        )
    }
    
}

export default Login
