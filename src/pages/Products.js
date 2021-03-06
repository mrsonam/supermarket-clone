import React,{useState, useEffect} from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import ProductsContainer from '../Components/ProuctsContainer/ProductsContainer'

const baseURL = "https://uat.ordering-boafresh.ekbana.net";
const apiKey = "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
const warehouseId = 1;

const Products = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        let res = await fetch(`${baseURL}/api/v4/product`, {
            method: 'GET',
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey
            },
        });
        let data = await res.json();
        if (res.ok) setProducts(data.data)
    }
    try {
        getProducts();
    } catch (err) {
        console.log(err);
    }
    return (
        <div>
            <Helmet>
                <title>Products</title>
            </Helmet>
            <BreadCrumbs page="Products"/>
            <ProductsContainer products={products}/>
        </div>
    )
}

export default Products
