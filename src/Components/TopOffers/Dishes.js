import React from 'react';
import { Col,Card, Button } from 'react-bootstrap';

const Dishes = ({ dishes }) => {
        return (
            <Col md={3} className="top_brand_left mb-5">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img
                                            variant="top"
                                            src={dishes.images[0].imageName}
                                        />
                                        <Card.Body className="text-center">
                                            <Card.Title>
                                                {dishes.title}
                                            </Card.Title>
                                            <Card.Text>
                                                
                                                    NRs.{' '}
                                                    {
                                                        dishes.unitPrice[0]
                                                            .sellingPrice
                                                    }
                                                
                                            </Card.Text>
                                            <Button variant="outline-success">
                                                Add To Cart
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
            // <Col md={4} className="top_brand_left mb-5">
            //     <div className="hover14 column">
            //         <div className="agile_top_brand_left_grid">
            //             <div className="agile_top_brand_left_grid1">
            //                 <figure>
            //                     <div className="snipcart-item block">
            //                         <div className="snipcart-thumb">
            //                             <a href="products.html">
            //                                 <Image
            //                                     src={dishes.images[0].imageName}
            //                                     alt=""
            //                                 />
            //                             </a>
            //                             <p>{dishes.title}</p>
            //                             <h4>
            //                                 NRs. {dishes.unitPrice[0].sellingPrice}
            //                                 {/* <span>$35.00</span> */}
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
};

export default Dishes;
