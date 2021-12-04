import React from 'react';
import {
    Container,
    Row,
    Spinner,
} from 'react-bootstrap';
import Dishes from '../TopOffers/Dishes';

const NewOffers = ({ newProducts }) => {
    return (
        <div className="newproducts-w3agile">
            <Container>
                <h3>New offers</h3>
                <div className="agile_top_brands_grids">
                    <Row>
                        {newProducts !== undefined ? (
                            newProducts.sectionDetails.products.map(
                                (product) => {
                                    return (
                                        <Dishes dishes={product} key = {product.id}/>
                                        // <Col
                                        //     md={3}
                                        //     className="top_brand_left mb-5"
                                        //     key={product.id}
                                        // >
                                        //     <Card style={{ width: '18rem' }}>
                                        //         <Card.Img
                                        //             variant="top"
                                        //             src={
                                        //                 product.images[0]
                                        //                     .imageName
                                        //             }
                                        //         />
                                        //         <Card.Body className="text-center">
                                        //             <Card.Title>
                                        //                 {product.title}
                                        //             </Card.Title>
                                        //             <Card.Text>
                                        //                 <h5>
                                        //                     NRs.{' '}
                                        //                     {
                                        //                         product
                                        //                             .unitPrice[0]
                                        //                             .sellingPrice
                                        //                     }
                                        //                 </h5>
                                        //             </Card.Text>
                                        //             <Button variant="outline-success">
                                        //                 Add To Cart
                                        //             </Button>
                                        //         </Card.Body>
                                        //     </Card>
                                        // </Col>
                                    );
                                },
                            )
                        ) : (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </Spinner>
                        )}
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </Container>
        </div>
    );
};

export default NewOffers;
