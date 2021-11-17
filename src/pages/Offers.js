import React from 'react';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import TopOffers from '../Components/TopOffers/TopOffers';
import { Helmet } from 'react-helmet'

const Offers = () => {
    return (
        <div>
            <Helmet>
                <title>Offers</title>
            </Helmet>
            <BreadCrumbs page="Offers"/>
            <TopOffers />
        </div>
    );
};

export default Offers;
