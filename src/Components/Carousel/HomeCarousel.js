import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import b1 from "../../images/b1.jpg"
import b3 from "../../images/b3.jpg"


const HomeCarousel = () => {
    return (
        <div>
            <Carousel fade controls={false} indicators={false}>
                <Carousel.Item>
                    <Link to="/beverages">
                        <Image fluid={true}
                            className="d-block w-100"
                            src={b1}
                            alt="First slide"
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/personalcare">
                        <Image fluid={true}
                            className="d-block w-100"
                            src={b3}
                            alt="Second slide"
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="household">
                        <Image fluid={true}
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
