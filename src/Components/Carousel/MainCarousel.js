import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import CarouselItem from './CarouselItem';
// import img11 from '../../images/11.jpg';
// import img22 from '../../images/22.jpg';
// import img44 from '../../images/44.jpg';

const MainCarousel = ({ banner }) => {
    console.log(banner);
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
                
                {/* <Carousel.Item>
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
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
};

export default MainCarousel;
