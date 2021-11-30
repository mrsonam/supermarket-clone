import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const baseURL = "https://uat.ordering-boafresh.ekbana.net";

const RegistrationForm = () => {
    //states for form handling
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[phone, setPhone] = useState('');

    async function signUp() {
        let res = await fetch(`${baseURL}/api/v4/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "mobile_number": phone,
                "password": password
            })
        });
        let data = await res.json();
        console.log(data)
        return data.data;
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
                        {/* <div className="register-check-box">
                            <div className="check">
                                <label className="checkbox">
                                    <Form.Control type="checkbox" name="checkbox" />
                                    <i> </i>Subscribe to Newsletter
                                </label>
                            </div>
                        </div> */}
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
                                type="password"
                                placeholder="Password Confirmation"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className="register-check-box mb-2">
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
                            <Form.Control type="button" value="Register" onClick={signUp} />
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
