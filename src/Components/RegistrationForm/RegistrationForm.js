import React, { useState } from 'react';
import { Container, Form, ToastContainer, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;

const RegistrationForm = () => {
    //states for form handling
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('danger');
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => setShowToast(!showToast);

    const registerValidation = () => {
        if (firstName === '') {
            setMessage('First Name cannot be empty');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        } else if (lastName === '') {
            setMessage('Last Name cannot be empty');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        } else if (email === '') {
            setMessage('Email cannot be empty');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        } else if (phone === '') {
            setMessage('Mobile Number cannot be empty');
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
        } else if (password.length < 6) {
            setMessage('Password must be more than 6 characters');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        } else {
            return true;
        }
    };

    async function signUp() {
        if (registerValidation()) {
            let res = await fetch(`${baseURL}/api/v4/auth/signup`, {
                method: 'POST',
                headers: {
                    'Warehouse-Id': warehouseId,
                    'Api-key': apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    mobile_number: phone,
                    password: password,
                }),
            });
            let data = await res.json();
            console.log(data)
            if (res.ok) {
                setMessage('Successfully Registered');
                setVariant('success');
                if (!showToast) {
                    toggleShowToast();
                }
            } else{
                setMessage(data.errors[0].message);
                setVariant('danger');
                if (!showToast) {
                    toggleShowToast();
                }
            }
        }
    }
    return (
        <div>
            <div className="register">
                <Container>
                    <h2>Register Here</h2>
                    <div className="login-form-grids">
                        <h5>profile information</h5>
                        <Form>
                            <Form.Control
                                type="text"
                                placeholder="First Name..."
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <Form.Control
                                type="text"
                                placeholder="Last Name..."
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <h6>Login information</h6>
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                type="button"
                                value="Register"
                                onClick={signUp}
                            />
                        </Form>
                    </div>
                    <div className="register-home">
                        <Link to="/">Home</Link>
                    </div>
                </Container>
            </div>
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

export default RegistrationForm;
