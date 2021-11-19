import React from 'react';
import { Row } from 'react-bootstrap';
import ContactLeft from '../ContactLeft/ContactLeft';
import ContactRight from '../ContactRight/ContactRight';

const ContactContainer = () => {
    return (
        <div className="about">
            <div className="w3_agileits_contact_grids">
                <Row>
                    <ContactLeft />
                    <ContactRight />
                </Row>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
};

export default ContactContainer;
