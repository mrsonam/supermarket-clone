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
                            <NavLink className="nav-link" to="/pizza">
                                Pizza
                            </NavLink>
                            <NavLink className="nav-link" to="/momo">
                                Momo
                            </NavLink>
                            <NavLink className="nav-link" to="/noodles">
                                Noodles
                            </NavLink>
                            <NavLink className="nav-link" to="/chilli">
                                Chilli
                            </NavLink>
                            <NavLink className="nav-link" to="/sandwich">
                                Sanchwich
                            </NavLink>
                            <NavLink className="nav-link" to="/healthyChoice">
                                Healthy Choice
                            </NavLink>
                            <NavLink className="nav-link" to="/rice">
                                Rice
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
