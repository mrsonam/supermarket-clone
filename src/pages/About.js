import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import AboutSlider from '../Components/AboutSlider/AboutSlider'
import AboutTeam from '../Components/AboutTeam/AboutTeam'

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <BreadCrumbs page="About"/>
            <AboutUs/>
            <AboutSlider/>
            <AboutTeam/>
        </div>
    )
}

export default About
