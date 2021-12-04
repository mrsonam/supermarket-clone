import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    return (
        <div className="logo_products">
            <Container>
                <div className="w3ls_logo_products_left1">
                    <ul className="phone_email">
                        <li>
                            <FontAwesomeIcon
                                icon={faPhoneAlt}
                                className="phoneIcon"
                            />
                            Order online or call us : (+0123) 234 567
                        </li>
                    </ul>
                </div>
                <div className="w3ls_logo_products_left">
                    <h1>
                        <Link to="/">Boa Fresh</Link>
                    </h1>
                </div>
                <div className="w3l_search">
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            name="Search"
                            placeholder="Search for a Product..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Link to={`searchProduct/${search}`}>
                            <Button
                                type="button"
                                className="btn btn-default search"
                            >
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="searchIcon"
                                />
                            </Button>
                        </Link>

                        <div className="clearfix"></div>
                    </Form>
                </div>

                <div className="clearfix"> </div>
            </Container>
        </div>
    );
};

export default SearchBar;
