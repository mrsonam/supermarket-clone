import React, { useState } from 'react';
import {
    faMailBulk,
    faPhoneAlt,
    faGift,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Spinner, Container } from 'react-bootstrap';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';

const ProfileContainer = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [profile, setProfile] = useState([]);
    const getProfile = async () => {
        let res = await fetch(`${baseURL}/api/v4/profile/show`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey,
            },
        });
        let data = await res.json();
        if (res.status === 200) {
            setProfile(data.data);
        } else {
            throw data.errors[0].message;
        }
    };

    try {
        getProfile();
    } catch (err) {
        console.log(err);
    }
    return profile !== undefined ? (
        <Container>
            <Card style={{ width: '25rem', margin: 'auto' }}>
                <Card.Img variant="top" src={profile.image} />
                <Card.Body>
                    <Card.Title>
                        {profile.firstName} {profile.lastName}
                    </Card.Title>
                    <Card.Text>
                        <FontAwesomeIcon icon={faMailBulk} /> : {profile.email}{' '}
                        <br />
                        <FontAwesomeIcon icon={faPhoneAlt} /> :{' '}
                        {profile.mobileNumber} <br />
                        <FontAwesomeIcon icon={faGift} /> :{' '}
                        {!profile.total_loyalty_points
                            ? 0
                            : profile.total_loyalty_points}{' '}
                        <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    ) : (
        <Container>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    );
};

export default ProfileContainer;
