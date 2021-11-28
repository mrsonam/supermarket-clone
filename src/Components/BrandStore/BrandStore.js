import React from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BrandStore = ({ categories }) => {
    return (
        <div className="brands">
            <Container>
                <h3>Categories</h3>
                <div className="brands-agile">
                    <Row>
                        {categories !== undefined ? (
                            categories.categories.map((category) => (
                                <Col md={3} className="w3layouts-brand mb-5">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img
                                            variant="top"
                                            src={category.icon}
                                        />
                                        <Card.Body>
                                            <Card.Title>{category.title}</Card.Title>
                                            <Card.Text className="text-muted">
                                                Products: {category.productCount}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </Spinner>
                        )}
                    </Row>
                    <div className="clearfix"></div>
                </div>
            </Container>
        </div>
    );
};

export default BrandStore;
