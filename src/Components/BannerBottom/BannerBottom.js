import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import img111 from '../../images/111.jpg';

const BannerBottom = () => {
    return (
        <div className="ban-bottom-w3l">
            <Container>
                <Row>
                    <Col md={6} className="ban-bottom3">
                        <div className="ban-top">
                            <Image
                                fluid={true}
                                src={p2}
                                className="img-responsive"
                                alt=""
                            />
                        </div>
                        <div className="ban-img">
                            <div className=" ban-bottom1">
                                <div className="ban-top">
                                    <Image
                                        fluid={true}
                                        src={p3}
                                        className="img-responsive"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="ban-bottom2">
                                <div className="ban-top">
                                    <Image
                                        fluid={true}
                                        src={p4}
                                        className="img-responsive"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </Col>
                    <Col md={6} className="ban-bottom">
                        <div className="ban-top">
                            <Image
                                fluid={true}
                                src={img111}
                                className="img-responsive"
                                alt=""
                            />
                        </div>
                    </Col>
                </Row>

                <div className="clearfix"></div>
            </Container>
        </div>
    );
};

export default BannerBottom;
