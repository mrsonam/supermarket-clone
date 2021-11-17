import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <BreadCrumbs page="About"/>
            <AboutUs/>
        </div>
    )
}

export default About
