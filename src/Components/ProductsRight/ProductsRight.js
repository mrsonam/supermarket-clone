import React from 'react';
import { Row, Col, Form, Image, Pagination, Spinner } from 'react-bootstrap';

const ProductsRight = ({products}) => {
    let active = 1;
    let items = [];
    // products !== undefined ? items = products : items= [];
    
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Col md={12} className="products-right">
            <div className="products-right-grid">
                <div className="products-right-grids">
                    <div className="sorting">
                        <Form.Select className="frm-field required sect">
                            <option value="null">Default sorting</option>
                            <option value="null">Sort by popularity</option>
                            <option value="null">Sort by average rating</option>
                            <option value="null">Sort by price</option>
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
                {products !== undefined ? (
                            products.map(
                                (product) => {
                                    return (
                                        <Col
                                            md={3}
                                            className="top_brand_left mb-5"
                                        >
                                            <div className="hover14 column">
                                                <div className="agile_top_brand_left_grid">
                                                    <div className="agile_top_brand_left_grid1">
                                                        <figure>
                                                            <div className="snipcart-item block">
                                                                <div className="snipcart-thumb">
                                                                    <a href="products.html">
                                                                        <Image
                                                                            fluid={
                                                                                true
                                                                            }
                                                                            title=" "
                                                                            alt=" "
                                                                            src={
                                                                                product
                                                                                    .images[0]
                                                                                    .imageName
                                                                            }
                                                                        />
                                                                    </a>
                                                                    <p>
                                                                        {
                                                                            product.title
                                                                        }
                                                                    </p>
                                                                    <h4>
                                                                        NRs.{' '}
                                                                        {
                                                                            product
                                                                                .unitPrice[0]
                                                                                .sellingPrice
                                                                        }
                                                                        {/* <span>$55.00</span> */}
                                                                    </h4>
                                                                </div>
                                                                <div className="snipcart-details top_brand_home_details">
                                                                    <Form>
                                                                        <Form.Control
                                                                            type="button"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            className="button"
                                                                        />
                                                                    </Form>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                },
                            )
                        ) : (
                            <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
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
