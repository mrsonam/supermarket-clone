import React, { useState } from 'react';
import { Container, Form , ToastContainer, Toast} from 'react-bootstrap';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';

const UpdateProfileForm = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('danger');
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => setShowToast(!showToast);

    const updateValidation = () => {
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
        } else {
            return true;
        }
    };

    async function update() {
        if (updateValidation()) {
            let res = await fetch(`${baseURL}/api/v4/profile`, {
                method: 'PATCH',
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                    'Api-key': apiKey,
                },
                body: JSON.stringify({
                    'first-name': firstName,
                    'last-name': lastName,
                }),
            });
            let data = await res.json();
            if (res.ok) {
                setMessage('Profile Updated');
                setVariant('success');
                if (!showToast) {
                    toggleShowToast();
                }
            } else {
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
                <h2>Update Info</h2>

                <div
                    className="login-form-grids"
                >
                    <Form>
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            type="button"
                            value="Update"
                            onClick={update}
                        />
                    </Form>
                </div>
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

export default UpdateProfileForm;
