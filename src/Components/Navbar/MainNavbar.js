import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;

const MainNavbar = () => {
    const [categories, setCategories] = useState([]);
    async function getCategories() {
        let res = await fetch(`${baseURL}/api/v4/category`, {
            method: 'GET',
            headers: {
                'Warehouse-Id': warehouseId,
                'Api-key': apiKey,
            },
        });
        let data = await res.json();
        if (res.ok) setCategories(data.data);
    }
    try {
        getCategories();
    } catch (err) {
        console.log(err);
    }
    return (
        <div className="navigation-agileits">
            <Container>
                <Navbar>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="navbar-header nav_2"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav">
                        <NavLink className="nav-link" to="/">
                                HOME
                            </NavLink>
                            <NavLink className="nav-link" to="/products">
                                ALL PRODUCTS
                            </NavLink>
                            {categories.map((category) => {
                                return (
                                    category.subCategory ? (
                                        <NavDropdown></NavDropdown>
                                    ) : (
                                        <NavLink key={category.id}
                                        className="nav-link"
                                        to={'/' + category.title.toLowerCase()}
                                    >
                                        {category.title}
                                    </NavLink>
                                    )
                                    
                                );
                            })}
                            <NavLink className="nav-link" to="/contact">
                                CONTACT
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default MainNavbar;
