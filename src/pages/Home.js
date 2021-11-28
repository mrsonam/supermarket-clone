import React, { useEffect, useState } from 'react'
import BannerBottom from '../Components/BannerBottom/BannerBottom'
import BrandStore from '../Components/BrandStore/BrandStore'
import HomeCarousel from '../Components/Carousel/HomeCarousel'
import MainCarousel from '../Components/Carousel/MainCarousel'
import NewOffers from '../Components/NewOffers/NewOffers'
import TopOffers from '../Components/TopOffers/TopOffers'
import { Helmet } from 'react-helmet'

const baseURL = "https://uat.ordering-boafresh.ekbana.net";
const apiKey = "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
const warehouseId = 1;

const Home = () => {
    const [home, setHome] = useState([]);
    async function getHome() {
        let res = await fetch(`${baseURL}/api/v4/newhome`, {
            method: 'GET',
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey
            },
        });
        let data = await res.json();
        // console.log(data.data);
        return data.data;
    }
    useEffect(() => {
        getHome().then(data => setHome(data));
    }, [])
    
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <MainCarousel banner={home[0]}/>
            <TopOffers newDishes={home[2]} hotOffers={home[7]}/>
            <HomeCarousel banner={home[6]}/>
            <BannerBottom/>
            <BrandStore categories={home[1]}/>
            <NewOffers newProducts={home[4]}/>
        </div>
    )
}

export default Home
