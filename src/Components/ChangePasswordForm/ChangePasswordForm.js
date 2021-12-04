import React, { useState } from 'react';
import { Container, Form, ToastContainer, Toast } from 'react-bootstrap';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';

const ChangePasswordForm = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('danger');
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => setShowToast(!showToast);

    const changeValidation = () => {
        if (oldPassword === '') {
            setMessage('Old Password cannot be empty');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        } else if (newPassword === '') {
            setMessage('New Password cannot be empty');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        }else if (confirmPassword === '') {
            setMessage('Confirm Password cannot be empty');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        }else if (newPassword !== confirmPassword) {
            setMessage('New Password and Confirm Password must be same');
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
            return false;
        } else {
            return true;
        }
    };

    async function changePassword() {
        if(changeValidation()){
        let res = await fetch(`${baseURL}/api/v4/profile/change-password`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey,
            },
            body: JSON.stringify({
                'old-password': oldPassword,
                'new-password': newPassword,
                'confirm-password': confirmPassword,
            }),
        });
        let data = await res.json();
        if (res.ok) {
            setMessage('Password Changed');
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
                <h2>Change Password</h2>

                <div
                    className="login-form-grids animated wow slideInUp"
                    data-wow-delay=".5s"
                >
                    <Form>
                        <Form.Control
                            type="text"
                            placeholder="Old Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            type="button"
                            value="Change"
                            onClick={changePassword}
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

export default ChangePasswordForm;
