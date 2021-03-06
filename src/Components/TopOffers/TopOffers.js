import React, { useState } from 'react';
import { Container, Tabs, Tab, Row, Spinner } from 'react-bootstrap';
import Dishes from './Dishes';

const TopOffers = ({ newDishes, hotOffers }) => {
    const [key, setKey] = useState('ENJOY OUR NEW DISHES');
    return (
        <div className="top-brands">
            <Container>
                <h2>Top selling offers</h2>
                <div className="grid_3 grid_5">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        {newDishes !== undefined ? (
                            <Tab
                                eventKey={newDishes.sectionDetails.title}
                                title={newDishes.sectionDetails.title}
                            >
                                <Container>
                                    <div className="agile_top_brands_grids">
                                        <Row>
                                            {newDishes.sectionDetails.products.map(
                                                (dishes) => {
                                                    return (
                                                        <Dishes
                                                            dishes={dishes}
                                                            key={dishes.id}
                                                        />
                                                    );
                                                },
                                            )}
                                        </Row>

                                        <div className="clearfix"> </div>
                                    </div>
                                </Container>
                            </Tab>
                        ) : (
                            <Container>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </Spinner>
                            </Container>
                        )}
                        {hotOffers !== undefined ? (
                            <Tab
                                eventKey={hotOffers.sectionDetails.title}
                                title={hotOffers.sectionDetails.title}
                            >
                                <Container>
                                    <div className="agile_top_brands_grids">
                                        <Row>
                                            {hotOffers.sectionDetails.products.map(
                                                (dishes) => {
                                                    return (
                                                        <Dishes
                                                            dishes={dishes}
                                                            key={dishes.id}
                                                        />
                                                    );
                                                },
                                            )}
                                        </Row>

                                        <div className="clearfix"> </div>
                                    </div>
                                </Container>
                            </Tab>
                        ) : (
                            <Container>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </Spinner>
                            </Container>
                        )}
                    </Tabs>
                </div>
            </Container>
        </div>
    );
};

export default TopOffers;
