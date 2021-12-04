import React, {useState} from 'react'
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');

    async function sendResetLink() {
        let res = await fetch(`${baseURL}/api/v4/auth/forgot-password`, {
            method: 'POST',
            headers: {
                'Warehouse-Id': warehouseId,
                'Api-key': apiKey
            },
            body: JSON.stringify({
                email: email,
            }),
        });
        let data = await res.json();
        if (res.ok) console.log(data)
    }
    return (
        <div className="login">
            <Container>
                <h2>Forgot Password?</h2>

                <div
                    className="login-form-grids"
                >
                    <Form>
                        <Form.Control
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control
                            type="button"
                            value="Login"
                            onClick={sendResetLink}
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
        </div>
    )
}

export default ForgotPasswordForm
