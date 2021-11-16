import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <div class="logo_products">
            <Container>
                <div class="w3ls_logo_products_left1">
                    <ul class="phone_email">
                        <li>
                            <FontAwesomeIcon icon={faPhone} className="phoneIcon"/>Order
                            online or call us : (+0123) 234 567
                        </li>
                    </ul>
                </div>
                <div class="w3ls_logo_products_left">
                    <h1>
                        <a href="index.html">super Market</a>
                    </h1>
                </div>
                <div class="w3l_search">
                    <Form>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search for a Product..."
                            required=""
                        />
                        <button
                            type="submit"
                            class="btn btn-default search"
                            aria-label="Left Align"
                        >
                            <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                        </button>
                        <div class="clearfix"></div>
                    </Form>
                </div>

                <div class="clearfix"> </div>
            </Container>
        </div>
    );
};

export default SearchBar;
