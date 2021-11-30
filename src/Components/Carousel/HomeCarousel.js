import React from 'react';
import { Carousel, Image, Spinner } from 'react-bootstrap';
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
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
