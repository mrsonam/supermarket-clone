import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGooglePlus,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import t1 from '../../images/t1.jpg';
import t2 from '../../images/t2.jpg';
import t3 from '../../images/t3.jpg';
import t4 from '../../images/t4.jpg';

const AboutTeam = () => {
    return (
        <div className="about-team">
            <Container>
                <h3 className="w3_agile_header">Meet Our Team</h3>
                <div className="team-agileitsinfo">
                    <Row>
                        <Col md={3} className="about-team-grids">
                            <Image fluid={true} src={t4} alt="" />
                            <div className="team-w3lstext">
                                <h4>
                                    <span>ANDERSON,</span> Manager
                                </h4>
                                <p>
                                    Odio dignissimos vero eos voluptatem
                                    accusantium doloremque laudantium reader
                                    will be distracted.
                                </p>
                            </div>
                            <div className="social-icons caption">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" className="facebook">
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" className="twitter">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/" className="googleplus">
                                            <FontAwesomeIcon
                                                icon={faGooglePlus}
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <div className="clearfix"> </div>
                            </div>
                        </Col>
                        <Col md={3} className="col-md-3 about-team-grids">
                            <Image fluid={true} src={t2} alt="" />
                            <div className="team-w3lstext">
                                <h4>
                                    <span>ELIFS,</span> Director
                                </h4>
                                <p>
                                    Odio dignissimos vero eos voluptatem
                                    accusantium doloremque laudantium reader
                                    will be distracted.
                                </p>
                            </div>
                            <div className="social-icons caption">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" className="facebook">
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" className="twitter">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/" className="googleplus">
                                            <FontAwesomeIcon
                                                icon={faGooglePlus}
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <div className="clearfix"> </div>
                            </div>
                        </Col>
                        <Col md={3} className="about-team-grids">
                            <Image fluid={true} src={t1} alt="" />
                            <div className="team-w3lstext">
                                <h4>
                                    <span>JESSICA,</span> Supervisior
                                </h4>
                                <p>
                                    Odio dignissimos vero eos voluptatem
                                    accusantium doloremque laudantium reader
                                    will be distracted.
                                </p>
                            </div>
                            <div className="social-icons caption">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" className="facebook">
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" className="twitter">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/" className="googleplus">
                                            <FontAwesomeIcon
                                                icon={faGooglePlus}
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <div className="clearfix"> </div>
                            </div>
                        </Col>
                        <Col md={3} className="about-team-grids">
                            <Image fluid={true} src={t3} alt="" />
                            <div className="team-w3lstext">
                                <h4>
                                    <span>RACKHAM,</span> Staff
                                </h4>
                                <p>
                                    Odio dignissimos vero eos voluptatem
                                    accusantium doloremque laudantium reader
                                    will be distracted.
                                </p>
                            </div>
                            <div className="social-icons caption">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" className="facebook">
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" className="twitter">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/" className="googleplus">
                                            <FontAwesomeIcon
                                                icon={faGooglePlus}
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <div className="clearfix"> </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutTeam;
