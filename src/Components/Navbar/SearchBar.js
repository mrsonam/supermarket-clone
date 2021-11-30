import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

const baseURL = "https://uat.ordering-boafresh.ekbana.net";
const apiKey = "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
const warehouseId = 1;

const SearchBar = () => {
    const [search, setSearch] = useState('')
    // const [products, setProducts] = useState([]);
    async function getProducts() {
        let res = await fetch(`${baseURL}/api/v4/product?query=${search}`, {
            method: 'GET',
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey
            },
        });
        let data = await res.json();
        return data.data;
    }
    const showProducts = () => {
        getProducts().then(data => console.log(data))
        // console.log(products)
    }
    return (
        <div className="logo_products">
            <Container>
                <div className="w3ls_logo_products_left1">
                    <ul className="phone_email">
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} className="phoneIcon"/>Order
                            online or call us : (+0123) 234 567
                        </li>
                    </ul>
                </div>
                <div className="w3ls_logo_products_left">
                    <h1>
                        <Link to="/">Boa Fresh</Link>
                    </h1>
                </div>
                <div className="w3l_search">
                    <Form className="d-flex" onSubmit={showProducts}>
                        <Form.Control
                            type="text"
                            name="Search"
                            placeholder="Search for a Product..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <Button
                            type="button"
                            className="btn btn-default search"
                            onClick={showProducts}
                        >
                            <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                        </Button>
                        <div className="clearfix"></div>
                    </Form>
                </div>

                <div className="clearfix"> </div>
            </Container>
        </div>
    );
};

export default SearchBar;
