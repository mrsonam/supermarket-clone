import {
    faMailBulk,
    faPhoneAlt,
    faGift,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const ProfileContainer = ({ userInfo }) => {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={userInfo.image} />
                <Card.Body>
                    <Card.Title>
                        {userInfo.firstName} {userInfo.lastName}
                    </Card.Title>
                    <Card.Text>
                        <FontAwesomeIcon icon={faMailBulk} /> : {userInfo.email}{' '}
                        <br />
                        <FontAwesomeIcon icon={faPhoneAlt} /> :{' '}
                        {userInfo.mobileNumber} <br />
                        <FontAwesomeIcon icon={faGift} /> :{' '}
                        {!userInfo.total_loyalty_points
                            ? 0
                            : userInfo.total_loyalty_points}{' '}
                        <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProfileContainer;
