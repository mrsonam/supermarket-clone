import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import b1 from "../../images/b1.jpg"
import b3 from "../../images/b3.jpg"


const HomeCarousel = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <Link to="/beverages">
                        <img
                            className="d-block w-100"
                            src={b1}
                            alt="First slide"
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/personalcare">
                        <img
                            className="d-block w-100"
                            src={b3}
                            alt="Second slide"
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="household">
                        <img
                            className="d-block w-100"
                            src={b1}
                            alt="Third slide"
                        />
                    </Link>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
