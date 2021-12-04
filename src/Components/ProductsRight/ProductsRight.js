import React from 'react';
import {
    Row,
    Col,
    Form,
    Pagination,
    Spinner,
    Container
} from 'react-bootstrap';
import Dishes from '../TopOffers/Dishes';

const ProductsRight = ({ products }) => {
    let sortedProducts
    let active = 1;
    let items = [];

    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    if (products!==undefined) sortedProducts = products
    const sortProducts = (e) => {
        if(e.target.value === "nameAsc"){
            sortedProducts = products.sort((a, b) => {
                if (a.title > b.title) return 1;
                else if (b.title > a.title) return -1;
                else return 0;
            });
        } else if(e.target.value === "nameDesc"){
            sortedProducts = products.sort((a, b) => {
                if (a.title > b.title) return -1;
                else if (b.title > a.title) return 1;
                else return 0;
            });
        }
    }
    return (
        <Col md={8} className="products-right">
            <div className="products-right-grid">
                <div className="products-right-grids">
                    <div className="sorting">
                        <Form.Select className="frm-field required sect" onChange={(e) => sortProducts(e)}>
                            <option value="null">Default sorting</option>
                            <option value="nameAsc">Alphabetical Sorting (A-Z)</option>
                            <option value="nameDesc">Alphabetical Sorting (Z-A)</option>
                            <option value="priceAsc">Sort by price(High-Low)</option>
                            <option value="priceDesc">Sort by price(Low-High)</option>
                        </Form.Select>
                    </div>
                    <div className="sorting-left">
                        <Form.Select className="frm-field required sect">
                            <option value="null">Item on page 9</option>
                            <option value="null">Item on page 18</option>
                            <option value="null">Item on page 32</option>
                            <option value="null">All</option>
                        </Form.Select>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="agile_top_brands_grids">
                <Row>
                    {sortedProducts !== undefined ? (
                        sortedProducts.map((product) => {
                            return (
                                <Dishes dishes={product} key={product.id}/>
                            );
                        })
                    ) : (
                        <Container><Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></Container>
                    )}
                </Row>
                <div className="clearfix"> </div>
            </div>
            <div className="numbering">
                <Pagination className="paging">
                    <Pagination.Prev />
                    {items}
                    <Pagination.Next />
                </Pagination>
            </div>
        </Col>
    );
};

export default ProductsRight;
