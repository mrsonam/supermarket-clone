import React from 'react';
import { Container } from 'react-bootstrap';
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
            <div class="footer">
                <Container>
                    <div class="w3_footer_grids d-flex">
                        <div class="col-md-3 w3_footer_grid">
                            <h3>Contact</h3>

                            <ul class="address">
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
                                    <Link to="mailto:info@example.com">
                                        info@example.com
                                    </Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </i>
                                    +1234 567 567
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 w3_footer_grid">
                            <h3>Information</h3>
                            <ul class="info">
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="about.html">About Us</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="contact.html">Contact Us</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="short-codes.html">Short Codes</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="faq.html">FAQ's</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="products.html">Special Products</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 w3_footer_grid">
                            <h3>Category</h3>
                            <ul class="info">
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="groceries.html">Groceries</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="household.html">Household</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="personalcare.html">
                                        Personal Care
                                    </Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="packagedfoods.html">
                                        Packaged Foods
                                    </Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="beverages.html">Beverages</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 w3_footer_grid">
                            <h3>Profile</h3>
                            <ul class="info">
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="products.html">Store</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="checkout.html">My Cart</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="login.html">Login</Link>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} className="faArrowRight"/>
                                    </i>
                                    <Link to="registered.html">Create Account</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </Container>

                <div class="footer-copy">
                    <div class="container">
                        <p>
                            © 2017 Super Market. All rights reserved | Design by{' '}
                            <Link to="http://w3layouts.com/">W3layouts</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer-botm">
                <div class="container">
                    <div class="w3layouts-foot">
                        <ul>
                            <li>
                                <Link to="#" class="w3_agile_facebook">
                                    <FontAwesomeIcon icon={faFacebookF}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" class="agile_twitter">
                                <FontAwesomeIcon icon={faTwitter}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" class="w3_agile_dribble">
                                <FontAwesomeIcon icon={faDribbble}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" class="w3_agile_vimeo">
                                <FontAwesomeIcon icon={faVimeoV}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="payment-w3ls">
                        <img
                            src={card}
                            alt=" "
                            class="img-responsive"
                        />
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
