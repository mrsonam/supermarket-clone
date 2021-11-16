import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
    return (
        <Navbar className="navigation-agileits">
            <Container>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="navbar-header nav_2"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav navbar-nav ">
                        <NavLink to="#home" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="#link" className="nav-link">
                            Link
                        </NavLink>
                        <NavDropdown
                            title="Groceries"
                            id="basic-nav-dropdown"
                            className="multi-column-dropdown"
                        >
                            <NavLink>
                                <NavDropdown.Item>
                                    <h6>All Groceries</h6>
                                </NavDropdown.Item>
                            </NavLink>
                            <NavDropdown.Divider />
                            <NavLink>
                                <NavDropdown.Item>
                                    Dals & Pulses
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item>
                                    Almonds
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Cashews
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Dry Fruit
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Mukhwas
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Rice & Rice Products
                                </NavDropdown.Item>
                            </NavLink>
                        </NavDropdown>
                        <NavDropdown
                            title="Household"
                            id="basic-nav-dropdown"
                            className="multi-column-dropdown"
                        >
                            <NavLink>
                                <NavDropdown.Item >
                                    <h6>All Household</h6>
                                </NavDropdown.Item>
                            </NavLink>
                            <NavDropdown.Divider />
                            <NavLink>
                                <NavDropdown.Item >
                                    Cookware
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Dust Pans
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Scrubbers
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Dust Cloth
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Mops
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Kitchenware
                                </NavDropdown.Item>
                            </NavLink>
                        </NavDropdown>
                        <NavDropdown
                            title="Personal Care"
                            id="basic-nav-dropdown"
                            className="multi-column-dropdown"
                        >
                            <NavLink>
                                <NavDropdown.Item >
                                    <h6>Baby Care</h6>
                                </NavDropdown.Item>
                            </NavLink>
                            <NavDropdown.Divider />
                            <NavLink>
                                <NavDropdown.Item >
                                    Baby Soap
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Baby Care Accessories
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Baby Oil & Shampoos
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Baby Creams & Lotion
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Baby Powder
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Diapers & Wipes
                                </NavDropdown.Item>
                            </NavLink>
                        </NavDropdown>
                        <NavDropdown
                            title="Packaged Foods"
                            id="basic-nav-dropdown"
                            className="multi-column-dropdown"
                        >
                            <NavLink>
                                <NavDropdown.Item >
                                    <h6>All Accessories</h6>
                                </NavDropdown.Item>
                            </NavLink>
                            <NavDropdown.Divider />
                            <NavLink>
                                <NavDropdown.Item >
                                    Baby Food
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Desert Items
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Biscuits
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Breakfast Cereals
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Canned Food
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Chocolates & Sweets
                                </NavDropdown.Item>
                            </NavLink>
                        </NavDropdown>
                        <NavDropdown
                            title="Beverages"
                            id="basic-nav-dropdown"
                            className="multi-column-dropdown"
                        >
                            <NavLink>
                                <NavDropdown.Item >
                                    <h6>All Accessories</h6>
                                </NavDropdown.Item>
                            </NavLink>
                            <NavDropdown.Divider />
                            <NavLink>
                                <NavDropdown.Item >
                                    Tea & Coffee
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Green Tea
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Ground Coffee
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Herbal Tea
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Instant Coffee
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Tea
                                </NavDropdown.Item>
                            </NavLink>
                            <NavLink>
                                <NavDropdown.Item >
                                    Tea Bags
                                </NavDropdown.Item>
                            </NavLink>
                        </NavDropdown>
                        <NavLink to="#gourmet" className="nav-link">
                            Gourmet
                        </NavLink>
                        <NavLink to="#link" className="nav-link">
                            Offers
                        </NavLink>
                        <NavLink to="#link" className="nav-link">
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                {/* <nav className="navbar navbar-default">
                    <div
                        className="collapse navbar-collapse"
                        id="bs-megadropdown-tabs"
                    >
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a to="index.html" className="act">
                                    Home
                                </a>
                            </li>
                            <li className="dropdown">
                                <a
                                    to="/"
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
                                                    <a to="groceries.html">
                                                        Dals & Pulses
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="groceries.html">
                                                        Almonds
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="groceries.html">
                                                        Cashews
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="groceries.html">
                                                        Dry Fruit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="groceries.html">
                                                        {' '}
                                                        Mukhwas{' '}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="groceries.html">
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
                                    to="/"
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
                                                    <a to="household.html">
                                                        Cookware
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="household.html">
                                                        Dust Pans
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="household.html">
                                                        Scrubbers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="household.html">
                                                        Dust Cloth
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="household.html">
                                                        {' '}
                                                        Mops{' '}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="household.html">
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
                                    to="/"
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
                                                    <a to="personalcare.html">
                                                        Baby Soap
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="personalcare.html">
                                                        Baby Care Accessories
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="personalcare.html">
                                                        Baby Oil & Shampoos
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="personalcare.html">
                                                        Baby Creams & Lotion
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="personalcare.html">
                                                        {' '}
                                                        Baby Powder
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="personalcare.html">
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
                                    to="/"
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
                                                    <a to="packagedfoods.html">
                                                        Baby Food
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="packagedfoods.html">
                                                        Dessert Items
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="packagedfoods.html">
                                                        Biscuits
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="packagedfoods.html">
                                                        Breakfast Cereals
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="packagedfoods.html">
                                                        {' '}
                                                        Canned Food{' '}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="packagedfoods.html">
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
                                    to="/"
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
                                                    <a to="beverages.html">
                                                        Green Tea
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="beverages.html">
                                                        Ground Coffee
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="beverages.html">
                                                        Herbal Tea
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="beverages.html">
                                                        Instant Coffee
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="beverages.html">
                                                        {' '}
                                                        Tea{' '}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a to="beverages.html">
                                                        Tea Bags
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <a to="gourmet.html">Gourmet</a>
                            </li>
                            <li>
                                <a to="offers.html">Offers</a>
                            </li>
                            <li>
                                <a to="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}
            </Container>
        </Navbar>
    );
};

export default MainNavbar;
