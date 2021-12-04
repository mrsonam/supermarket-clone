import React from 'react';
import { Container, Carousel, Spinner } from 'react-bootstrap';
import CarouselItem from './CarouselItem';

const MainCarousel = ({ banner }) => {
    return (
        <div className="main-carousel">
            <Carousel fade controls={false} indicators={true}>
                {banner !== undefined ? (
                    banner.details.map((elem) => (
                        <CarouselItem key={elem.id} elem={elem} />
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
