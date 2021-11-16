import React from 'react';
// import './LoginNavbar.css';
import { Container, Form, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const LoginNavbar = () => {
    return (
        <div className="agileits_header">
            <Container>
                <div className="w3l_offers">
                    <p>
                        SALE UP TO 70% OFF. USE CODE "SALE70%" .{' '}
                        <a href="products.html">SHOP NOW</a>
                    </p>
                </div>
                <div className="agile-login">
                    <ul>
                        <li>
                            <NavLink to="">Create Account</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Help</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="product_list_header">
                    <Form className="last">
                        <Form.Control type="hidden" name="cmd" value="_cart" />
                        <Form.Control type="hidden" name="display" value="1" />
                        <Button
                            className="w3view-cart"
                            type="submit"
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
