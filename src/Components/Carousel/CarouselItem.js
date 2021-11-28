import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const CarouselItem = ({elem}) => {
    return (
        <Carousel.Item >
            <Image fluid={true} className="d-block w-100" src={elem.images} alt="" />
            <div className="slide-desc">
                <h3>{elem.title}</h3>
            </div>
        </Carousel.Item>
    );
};

export default CarouselItem;
