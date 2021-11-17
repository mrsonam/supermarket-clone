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
                                
                                <NavLink className="nav-link" to="/groceries">
                                    <NavDropdown.Item>
                                        Dals & Pulses
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/groceries">
                                    <NavDropdown.Item>Almonds</NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/groceries">
                                    <NavDropdown.Item>Cashews</NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/groceries">
                                    <NavDropdown.Item>
                                        Dry Fruit
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/groceries">
                                    <NavDropdown.Item>Mukhwas</NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/groceries">
                                    <NavDropdown.Item>
                                        Rice & Rice Products
                                    </NavDropdown.Item>
                                </NavLink>
                            </NavDropdown>
                            <NavDropdown
                                title="Household"
                                id="basic-nav-dropdown"
                                className="multi-column-dropdown"
                            >
                                <NavDropdown.Item>
                                    <h6>All Household</h6>
                                </NavDropdown.Item>
                                
                                <NavLink className="nav-link" to="/household">
                                    <NavDropdown.Item>
                                        Cookware
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/household">
                                    <NavDropdown.Item>
                                        Dust Pans
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/household">
                                    <NavDropdown.Item>
                                        Scrubbers
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/household">
                                    <NavDropdown.Item>
                                        Dust Cloth
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/household">
                                    <NavDropdown.Item>Mops</NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/household">
                                    <NavDropdown.Item>
                                        Kitchenware
                                    </NavDropdown.Item>
                                </NavLink>
                            </NavDropdown>
                            <NavDropdown
                                title="Personal Care"
                                id="basic-nav-dropdown"
                                className="multi-column-dropdown"
                            >
                                <NavDropdown.Item>
                                    <h6>Baby Care</h6>
                                </NavDropdown.Item>
                                
                                <NavLink className="nav-link" to="/personalcare">
                                    <NavDropdown.Item>
                                        Baby Soap
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/personalcare">
                                    <NavDropdown.Item>
                                        Baby Care Accessories
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/personalcare">
                                    <NavDropdown.Item>
                                        Baby Oil & Shampoos
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/personalcare">
                                    <NavDropdown.Item>
                                        Baby Creams & Lotion
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/personalcare">
                                    <NavDropdown.Item>
                                        Baby Powder
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/personalcare">
                                    <NavDropdown.Item>
                                        Diapers & Wipes
                                    </NavDropdown.Item>
                                </NavLink>
                            </NavDropdown>
                            <NavDropdown
                                title="Packaged Foods"
                                id="basic-nav-dropdown"
                                className="multi-column-dropdown"
                            >
                                <NavDropdown.Item>
                                    <h6>All Accessories</h6>
                                </NavDropdown.Item>
                                
                                <NavLink className="nav-link" to="/packagedfoods">
                                    <NavDropdown.Item>
                                        Baby Food
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/packagedfoods">
                                    <NavDropdown.Item>
                                        Desert Items
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/packagedfoods">
                                    <NavDropdown.Item>
                                        Biscuits
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/packagedfoods">
                                    <NavDropdown.Item>
                                        Breakfast Cereals
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/packagedfoods">
                                    <NavDropdown.Item>
                                        Canned Food
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/packagedfoods">
                                    <NavDropdown.Item>
                                        Chocolates & Sweets
                                    </NavDropdown.Item>
                                </NavLink>
                            </NavDropdown>
                            <NavDropdown
                                title="Beverages"
                                id="basic-nav-dropdown"
                                className="multi-column-dropdown"
                            >
                                <NavDropdown.Item>
                                    <h6>Tea & Coffee</h6>
                                </NavDropdown.Item>
                                
                                <NavLink className="nav-link" to="/beverages">
                                    <NavDropdown.Item>
                                        Green Tea
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/beverages">
                                    <NavDropdown.Item>
                                        Ground Coffee
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/beverages">
                                    <NavDropdown.Item>
                                        Herbal Tea
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/beverages">
                                    <NavDropdown.Item>
                                        Instant Coffee
                                    </NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/beverages">
                                    <NavDropdown.Item>Tea</NavDropdown.Item>
                                </NavLink>
                                <NavLink className="nav-link" to="/beverages">
                                    <NavDropdown.Item>
                                        Tea Bags
                                    </NavDropdown.Item>
                                </NavLink>
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
