import React, { useState } from 'react';
import { Row, Col, Form, Spinner, Card, Button } from 'react-bootstrap';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;

const ProductsByCategories = ({ categoryId }) => {
    const [products, setProducts] = useState([]);
    async function getProducts() {
        let res = await fetch(
            `${baseURL}/api/v4/product?categoryId=${categoryId}`,
            {
                method: 'GET',
                headers: {
                    'Warehouse-Id': warehouseId,
                    'Api-key': apiKey,
                },
            },
        );
        let data = await res.json();
        if (res.ok) setProducts(data.data);
    }
    try {
        getProducts();
    } catch (err) {
        console.log(err);
    }
    return (
        <Col md={9} className="products-right">
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
                        products.map((product) => {
                            return (
                                <Col md={4} className="top_brand_left mb-5">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img
                                            variant="top"
                                            src={product.images[0].imageName}
                                        />
                                        <Card.Body className="text-center">
                                            <Card.Title>
                                                {product.title}
                                            </Card.Title>
                                            <Card.Text>
                                                <h5>
                                                    NRs.{' '}
                                                    {
                                                        product.unitPrice[0]
                                                            .sellingPrice
                                                    }
                                                </h5>
                                            </Card.Text>
                                            <Button variant="outline-success">
                                                Add To Cart
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                // <Col md={3} className="top_brand_left mb-5">
                                //     <div className="hover14 column">
                                //         <div className="agile_top_brand_left_grid">
                                //             <div className="agile_top_brand_left_grid1">
                                //                 <figure>
                                //                     <div className="snipcart-item block">
                                //                         <div className="snipcart-thumb">
                                //                             <a href="products.html">
                                //                                 <Image
                                //                                     fluid={true}
                                //                                     title=" "
                                //                                     alt=" "
                                //                                     src={
                                //                                         product
                                //                                             .images[0]
                                //                                             .imageName
                                //                                     }
                                //                                 />
                                //                             </a>
                                //                             <p>
                                //                                 {product.title}
                                //                             </p>
                                //                             <h4>
                                //                                 NRs.{' '}
                                //                                 {
                                //                                     product
                                //                                         .unitPrice[0]
                                //                                         .sellingPrice
                                //                                 }
                                //                                 {/* <span>$55.00</span> */}
                                //                             </h4>
                                //                         </div>
                                //                         <div className="snipcart-details top_brand_home_details">
                                //                             <Form>
                                //                                 <Form.Control
                                //                                     type="button"
                                //                                     name="submit"
                                //                                     value="Add to cart"
                                //                                     className="button"
                                //                                 />
                                //                             </Form>
                                //                         </div>
                                //                     </div>
                                //                 </figure>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </Col>
                            );
                        })
                    ) : (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    )}
                </Row>
                <div className="clearfix"> </div>
            </div>
        </Col>
    );
};

export default ProductsByCategories;
