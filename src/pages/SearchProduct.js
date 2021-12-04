import React,{useState} from 'react'
import { useParams } from 'react-router'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import { Helmet } from 'react-helmet'
import ProductsContainer from '../Components/ProuctsContainer/ProductsContainer'

const baseURL = "https://uat.ordering-boafresh.ekbana.net";
const apiKey = "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
const warehouseId = 1;

const SearchProduct = () => {
    const { key } = useParams();
    const query = key.toString();
    const [products, setProducts] = useState([]);
    async function getProducts() {
        let res = await fetch(`${baseURL}/api/v4/product?query=${query}`, {
            method: 'GET',
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey
            },
        });
        let data = await res.json();
        console.log(res)
        if(res.ok) setProducts(data.data)
    }
    try {
        getProducts();
    } catch (err) {
        console.log(err);
    }
    return (
        <div>
            <Helmet>
                <title>Search Results</title>
            </Helmet>
            <BreadCrumbs page={"Results for " + key}/>
            <ProductsContainer products={products}/>
        </div>
    )
}

export default SearchProduct
