import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
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
                                Home
                            </NavLink>
                            <NavDropdown
                                title="Groceries"
                                id="basic-nav-dropdown"
                                className="multi-column-dropdown"
                            >
                                <NavDropdown.Item>
                                    <h6>All Groceries</h6>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/groceries"
                                    >
                                        Dals & Pulses
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/groceries"
                                    >
                                        Almonds
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/groceries"
                                    >
                                        Cashews
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/groceries"
                                    >
                                        Dry Fruit
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/groceries"
                                    >
                                        Mukhwas
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/groceries"
                                    >
                                        Rice & Rice Products
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Household"
                                id="basic-nav-dropdown"
                                className="multi-column-dropdown"
                            >
                                <NavDropdown.Item>
                                    <h6>All Household</h6>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/household"
                                    >
                                        Cookware
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/household"
                                    >
                                        Dust Pans
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/household"
                                    >
                                        Scrubbers
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/household"
                                    >
                                        Dust Cloth
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/household"
                                    >
                                        Mops
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/household"
                                    >
                                        Kitchenware
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Personal Care"
                                id="basic-nav-dropdown"
                                className="multi-column-dropdown"
                            >
                                <NavDropdown.Item>
                                    <h6>Baby Care</h6>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/personalcare"
                                    >
                                        Baby Soap
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/personalcare"
                                    >
                                        Baby Care Accessories
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/personalcare"
                                    >
                                        Baby Oil & Shampoos
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/personalcare"
                                    >
                                        Baby Creams & Lotion
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/personalcare"
                                    >
                                        Baby Powder
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/personalcare"
                                    >
                                        Diapers & Wipes
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Packaged Foods"
                                id="basic-nav-dropdown"
                                className="multi-column-dropdown"
                            >
                                <NavDropdown.Item>
                                    <h6>All Accessories</h6>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/packagedfoods"
                                    >
                                        Baby Food
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/packagedfoods"
                                    >
                                        Desert Items
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/packagedfoods"
                                    >
                                        Biscuits
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/packagedfoods"
                                    >
                                        Breakfast Cereals
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/packagedfoods"
                                    >
                                        Canned Food
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/packagedfoods"
                                    >
                                        Chocolates & Sweets
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Beverages"
                                id="basic-nav-dropdown"
                                className="multi-column-dropdown"
                            >
                                <NavDropdown.Item>
                                    <h6>Tea & Coffee</h6>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/beverages"
                                    >
                                        Green Tea
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/beverages"
                                    >
                                        Ground Coffee
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/beverages"
                                    >
                                        Herbal Tea
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/beverages"
                                    >
                                        Instant Coffee
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/beverages"
                                    >
                                        Tea
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink
                                        className="nav-link"
                                        to="/beverages"
                                    >
                                        Tea Bags
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className="nav-link" to="/gourmet">
                                Gourmet
                            </NavLink>
                            <NavLink className="nav-link" to="/offers">
                                Offers
                            </NavLink>
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default MainNavbar;
