import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faEnvelope,
    faPhoneAlt,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import card from "../../images/card.png"
import { faTwitter, faFacebookF, faDribbble, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <Container>
                    <div className="w3_footer_grids d-flex">
                        <div className="col-md-4 w3_footer_grid">
                            <h3>Contact</h3>

                            <ul className="address">
                                <li>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faMapMarkerAlt}
                                        />
                                    </i>
                                    1234k Avenue, 4th block,{' '}
                                    <span>New York City.</span>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </i>
                                    <a href="mailto:info@example.com">
                                        info@example.com
                                    </a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </i>
                                    +1234 567 567
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 w3_footer_grid">
                            <h3>Information</h3>
                            <ul className="info">
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="/faq">FAQ's</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="/products">Products</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 w3_footer_grid">
                            <h3>Profile</h3>
                            <ul className="info">
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="/products">Store</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="/checkout">My Cart</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="/signup">Create Account</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </Container>

                <div className="footer-copy">
                    <div className="container">
                        <p>
                            ?? 2017 Super Market. All rights reserved | Design by{' '}
                            <a href="http://w3layouts.com/">W3layouts</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-botm">
                <div className="container">
                    <div className="w3layouts-foot">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="__blank" className="w3_agile_facebook">
                                    <FontAwesomeIcon icon={faFacebookF}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="__blank" className="agile_twitter">
                                <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.dribbble.com/" target="__blank" className="w3_agile_dribble">
                                <FontAwesomeIcon icon={faDribbble}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.vimeo.com/" target="__blank" className="w3_agile_vimeo">
                                <FontAwesomeIcon icon={faVimeoV}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="payment-w3ls">
                        <Image fluid={true}
                            src={card}
                            alt=" "
                            className="img-responsive"
                        />
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
