import React from 'react';
import { Carousel, Col } from 'react-bootstrap';
import img11 from '../../images/11.jpg';
import img22 from '../../images/22.jpg';
import img44 from '../../images/44.jpg';

const MainCarousel = () => {
    return (
        <Col md={12}>
            <Carousel fade controls={false} indicators={false} className="main-carousel">
                <Carousel.Item>
                    <img src={img11} alt="" />
                    <div className="slide-desc">
                        <h3>Buy Rice Products Are Now On Line With Us</h3>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img22} alt="" />
                    <div className="slide-desc">
                        <h3>Whole Spices Products Are Now On Line With Us</h3>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img44} alt="" />
                    <div className="slide-desc">
                        <h3>Whole Spices Products Are Now On Line With Us</h3>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Col>
    );
};

export default MainCarousel;
