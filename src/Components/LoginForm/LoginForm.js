import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
    return (
        <div className="login">
            <Container>
                <h2>Login Form</h2>

                <div
                    className="login-form-grids animated wow slideInUp"
                    data-wow-delay=".5s"
                >
                    <Form>
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
                        <div className="forgot">
                            <Link to="#">Forgot Password?</Link>
                        </div>
                        <Form.Control type="submit" value="Login" />
                    </Form>
                </div>
                <h4>For New People</h4>
                <p>
                    <Link to="/signup">Register Here</Link> (Or) go back to{' '}
                    <Link to="/">
                        Home{' '}
                        <span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>{' '}
                    </Link>
                </p>
            </Container>
        </div>
    );
};

export default LoginForm;
