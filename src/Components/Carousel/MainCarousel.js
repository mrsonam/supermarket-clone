import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
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
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </Carousel>
        </div>
    );
};

export default MainCarousel;
