import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';

const UpdateProfileForm = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    async function update() {
        let res = await fetch(`${baseURL}/api/v4/profile`, {
            method: 'PATCH',
            headers: {
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey,
            },
            body: JSON.stringify({
                'first-name': firstName,
                'last-name': lastName,
                mobile_number: phone,
            }),
        });
        let data = await res.json();
        console.log(data);
        return data.data;
    }
    return (
        <div className="login">
            <Container>
                <h2>Update Info</h2>

                <div
                    className="login-form-grids animated wow slideInUp"
                    data-wow-delay=".5s"
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
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
        </div>
    );
};

export default UpdateProfileForm;
