import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';

const ChangePasswordForm = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function changePassword() {
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
        console.log(data);
        return data.data;
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
        </div>
    );
};

export default ChangePasswordForm;
