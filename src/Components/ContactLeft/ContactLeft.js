import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import Map from '../Map/Map';
import { Col } from 'react-bootstrap';

const ContactLeft = () => {
    return (
        <Col md={6} className="w3_agileits_contact_grid_left">
            <div class="agile_map">
                <Map />
            </div>
            <ContactInfo />
        </Col>
    );
};

export default ContactLeft;
