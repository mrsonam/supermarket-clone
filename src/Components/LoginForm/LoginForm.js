import React, { useState } from 'react';
import { Container, Form, ToastContainer, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const clientId = 2;
const clientSecret = 'ZkPYPKRiUsEzVke7Q5sq21DrVvYmNK5w5bZKGzQo';
const grantType = 'password';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('danger');
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => setShowToast(!showToast);

    const loginValidation = () => {
        if (email === '') {
            console.log("empty")
            setMessage('Email cannot be empty');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        } else if (password === '') {
            setMessage('Password cannot be empty');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        } else {
            return true;
        }
    };

    async function login() {
        if (loginValidation) {
            let res = await fetch(`${baseURL}/api/v4/auth/login`, {
                method: 'POST',
                headers: {
                    'Warehouse-Id': warehouseId,
                    'Api-key': apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    grant_type: grantType,
                    username: email,
                    password: password,
                }),
            });
            let data = await res.json();
            if (res.ok) {
                localStorage.setItem('accessToken', data.access_token);
                window.location.href = '/';
            }
            else{
                setMessage(data.errors[0].message);
                setVariant('danger');
                if (!showToast) {
                    toggleShowToast();
                }
            }
        }
    }
    return (
        <div className="login">
            <Container>
                <h2>Login Form</h2>

                <div className="login-form-grids">
                    <Form>
                        <Form.Control
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="forgot">
                            <Link to="/forgotPassword">Forgot Password?</Link>
                        </div>
                        <Form.Control
                            type="button"
                            value="Login"
                            onClick={login}
                        />
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
            <ToastContainer position="bottom-end" className="p-3">
                <Toast show={showToast} onClose={toggleShowToast} bg={variant}>
                    <Toast.Header>
                        <strong className="me-auto">Boa-Fresh</strong>
                    </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default LoginForm;
