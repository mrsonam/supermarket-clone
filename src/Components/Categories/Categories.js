import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;

const Categories = () => {
    const [categories, setCategories] = useState([]);
    async function getCategories() {
        let res = await fetch(
            `${baseURL}/api/v4/category`,
            {
                method: 'GET',
                headers: {
                    'Warehouse-Id': warehouseId,
                    'Api-key': apiKey,
                },
            },
        );
        let data = await res.json();
        if(res.ok) setCategories(data.data)
    }
    try {
        getCategories();
    } catch (err) {
        console.log(err);
    }
    return (
        <Col md={3} className="products-left">
            <div className="categories">
                <h2>Categories</h2>
                <ul className="cate">
                    {categories.map(category => {
                        return (<li>
                            <Link to={'/' +  category.title.toLowerCase()}>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                {category.title}
                            </Link>
                        </li>)
                    })}
                </ul>
            </div>
        </Col>
    );
};

export default Categories;
