import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const MainNavbar = () => {
    return (
        <Navbar className="navigation-agileits">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-header nav_2"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav navbar-nav ">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Groceries" id="basic-nav-dropdown" className="multi-column-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                <h6>All Groceries</h6>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">
                                Dals & Pulses
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Almonds
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Cashews
                            </NavDropdown.Item>
                            
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <nav className="navbar navbar-default">
                    <div
                        className="collapse navbar-collapse"
                        id="bs-megadropdown-tabs"
                    >
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="index.html" className="act">
                                    Home
                                </a>
                            </li>
                            {/* <!-- Mega Menu --> */}
                            <li className="dropdown">
                                <a
                                    href="/"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    Groceries<b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu multi-column columns-3">
                                    <div className="row">
                                        <div className="multi-gd-img">
                                            <ul className="multi-column-dropdown">
                                                <h6>All Groceries</h6>
                                                <li>
                                                    <a href="groceries.html">
                                                        Dals & Pulses
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="groceries.html">
                                                        Almonds
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="groceries.html">
                                                        Cashews
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="groceries.html">
                                                        Dry Fruit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="groceries.html">
                                                        {' '}
                                                        Mukhwas{' '}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="groceries.html">
                                                        Rice & Rice Products
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="/"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    Household<b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu multi-column columns-3">
                                    <div className="row">
                                        <div className="multi-gd-img">
                                            <ul className="multi-column-dropdown">
                                                <h6>All Household</h6>
                                                <li>
                                                    <a href="household.html">
                                                        Cookware
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="household.html">
                                                        Dust Pans
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="household.html">
                                                        Scrubbers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="household.html">
                                                        Dust Cloth
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="household.html">
                                                        {' '}
                                                        Mops{' '}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="household.html">
                                                        Kitchenware
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="/"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    Personal Care<b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu multi-column columns-3">
                                    <div className="row">
                                        <div className="multi-gd-img">
                                            <ul className="multi-column-dropdown">
                                                <h6>Baby Care</h6>
                                                <li>
                                                    <a href="personalcare.html">
                                                        Baby Soap
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="personalcare.html">
                                                        Baby Care Accessories
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="personalcare.html">
                                                        Baby Oil & Shampoos
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="personalcare.html">
                                                        Baby Creams & Lotion
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="personalcare.html">
                                                        {' '}
                                                        Baby Powder
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="personalcare.html">
                                                        Diapers & Wipes
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="/"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    Packaged Foods<b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu multi-column columns-3">
                                    <div className="row">
                                        <div className="multi-gd-img">
                                            <ul className="multi-column-dropdown">
                                                <h6>All Accessories</h6>
                                                <li>
                                                    <a href="packagedfoods.html">
                                                        Baby Food
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="packagedfoods.html">
                                                        Dessert Items
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="packagedfoods.html">
                                                        Biscuits
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="packagedfoods.html">
                                                        Breakfast Cereals
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="packagedfoods.html">
                                                        {' '}
                                                        Canned Food{' '}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="packagedfoods.html">
                                                        Chocolates & Sweets
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="/"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    Beverages<b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu multi-column columns-3">
                                    <div className="row">
                                        <div className="multi-gd-img">
                                            <ul className="multi-column-dropdown">
                                                <h6>Tea & Coeffe</h6>
                                                <li>
                                                    <a href="beverages.html">
                                                        Green Tea
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="beverages.html">
                                                        Ground Coffee
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="beverages.html">
                                                        Herbal Tea
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="beverages.html">
                                                        Instant Coffee
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="beverages.html">
                                                        {' '}
                                                        Tea{' '}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="beverages.html">
                                                        Tea Bags
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <a href="gourmet.html">Gourmet</a>
                            </li>
                            <li>
                                <a href="offers.html">Offers</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;