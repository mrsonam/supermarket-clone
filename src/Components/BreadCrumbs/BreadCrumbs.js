import React, {useState} from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({page}) => {
    // const [active, setActive] = useState({page})
    return (
        <div className="breadcrumbs">
            <Container>
                <Breadcrumb className="breadcrumb1 animated wow slideInLeft">
                    <Breadcrumb.Item>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item active>{page}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    );
};

export default BreadCrumbs;
