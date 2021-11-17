import React from 'react'
import BannerBottom from '../Components/BannerBottom/BannerBottom'
import BrandStore from '../Components/BrandStore/BrandStore'
import HomeCarousel from '../Components/Carousel/HomeCarousel'
import MainCarousel from '../Components/Carousel/MainCarousel'
import NewOffers from '../Components/NewOffers/NewOffers'
import TopOffers from '../Components/TopOffers/TopOffers'

const Home = () => {
    return (
        <div>
            {/* <MainCarousel/> */}
            <TopOffers/>
            <HomeCarousel/>
            <BannerBottom/>
            <BrandStore/>
            <NewOffers/>
        </div>
    )
}

export default Home
