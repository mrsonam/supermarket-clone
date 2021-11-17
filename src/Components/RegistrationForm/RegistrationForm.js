import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    return (
        <div>
            <div className="register">
                <Container>
                    <h2>Register Here</h2>
                    <div className="login-form-grids">
                        <h5>profile information</h5>
                        <Form action="#" method="post">
                            <Form.Control
                                type="text"
                                placeholder="First Name..."
                                required=" "
                            />
                            <Form.Control
                                type="text"
                                placeholder="Last Name..."
                                required=" "
                            />
                        </Form>
                        <div className="register-check-box">
                            <div className="check">
                                <label className="checkbox">
                                    <Form.Control type="checkbox" name="checkbox" />
                                    <i> </i>Subscribe to Newsletter
                                </label>
                            </div>
                        </div>
                        <h6>Login information</h6>
                        <Form action="#" method="post">
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                required=" "
                            />
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required=" "
                            />
                            <Form.Control
                                type="password"
                                placeholder="Password Confirmation"
                                required=" "
                            />
                            <div className="register-check-box">
                                <div className="check">
                                    <label className="checkbox">
                                        <Form.Control
                                            type="checkbox"
                                            name="checkbox"
                                        />
                                        <i> </i>I accept the terms and
                                        conditions
                                    </label>
                                </div>
                            </div>
                            <Form.Control type="submit" value="Register" />
                        </Form>
                    </div>
                    <div className="register-home">
                        <Link to="/">Home</Link>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default RegistrationForm;
