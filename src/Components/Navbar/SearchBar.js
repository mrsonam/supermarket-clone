import React from 'react';
import { Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    return (
        <div className="logo_products">
            <Container>
                <div className="w3ls_logo_products_left1">
                    <ul className="phone_email">
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} className="phoneIcon"/>Order
                            online or call us : (+0123) 234 567
                        </li>
                    </ul>
                </div>
                <div className="w3ls_logo_products_left">
                    <h1>
                        <Link to="/">super Market</Link>
                    </h1>
                </div>
                <div className="w3l_search">
                    <Form>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search for a Product..."
                            required=""
                        />
                        <button
                            type="submit"
                            className="btn btn-default search"
                            aria-label="Left Align"
                        >
                            <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                        </button>
                        <div className="clearfix"></div>
                    </Form>
                </div>

                <div className="clearfix"> </div>
            </Container>
        </div>
    );
};

export default SearchBar;
