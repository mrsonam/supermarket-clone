import React from 'react';
// import './LoginNavbar.css';
import { Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';

const LoginNavbar = () => {
    const accessToken = localStorage.getItem('accessToken');
    return (
        <div className="agileits_header">
            <Container>
                <div className="w3l_offers">
                    <p>
                        SALE UP TO 70% OFF. USE CODE "SALE70%" .{' '}
                        <Link to="/products">SHOP NOW</Link>
                    </p>
                </div>
                <div className="agile-login">
                    <ul>
                        {accessToken === null ? (
                            <>
                                <li>
                                    <NavLink to="/signup">
                                        Create Account
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                            <li>
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                            <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        </>
                        )}

                        <li>
                            <NavLink to="/contact">Help</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="product_list_header">
                    <Form className="last">
                        <Form.Control type="hidden" name="cmd" value="_cart" />
                        <Form.Control type="hidden" name="display" value="1" />
                        <Button
                            className="w3view-cart"
                            type="button"
                            name="submit"
                            value=""
                        >
                            <FontAwesomeIcon
                                icon={faCartArrowDown}
                                className="fa"
                            />
                        </Button>
                    </Form>
                </div>
                <div className="clearfix"> </div>
            </Container>
        </div>
    );
};

export default LoginNavbar;
