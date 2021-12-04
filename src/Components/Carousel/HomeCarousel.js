import React from 'react';
import { Container, Carousel, Image, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeCarousel = ({ banner }) => {
    return (
        <div>
            <Carousel fade>
                {banner !== undefined ? (
                    banner.details.map((elem) => (
                        <Carousel.Item key={elem.id}>
                            <Link to={elem.link_to}>
                                <Image
                                    fluid={true}
                                    className="d-block w-100"
                                    src={elem.images}
                                    alt="First slide"
                                />
                            </Link>
                        </Carousel.Item>
                    ))
                ) : (
                    <Container><Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></Container>
                )}
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
