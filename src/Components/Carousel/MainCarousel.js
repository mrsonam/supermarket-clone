import React from 'react';
import { Container, Carousel, Spinner, Image } from 'react-bootstrap';

const MainCarousel = ({ banner }) => {
    return (
        <div className="main-carousel">
            <Carousel fade controls={true} indicators={true}>
                {banner !== undefined ? (
                    banner.details.map((elem) => (
                        <Carousel.Item key={elem.id}>
                                <Image
                                    fluid={true}
                                    className="d-block w-100"
                                    src={elem.images}
                                    alt="First slide"
                                />
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

export default MainCarousel;
