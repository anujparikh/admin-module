/******************************************************************
 * Author: Anuj Parikh
 * Description: Component for Navigation Bar
 * Type: React Functional Component
 *******************************************************************/

/* Dependency Imports */
import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar fluid collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Brand Name</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">Users</NavItem>
                    <NavItem eventKey={2} href="#">Roles</NavItem>
                </Nav>
                <Nav pullRight className="c-mr-md">
                    <NavDropdown eventKey={3} title="User Name" id="user-name-dropdown">
                        <MenuItem eventKey={3.1}>Action #1</MenuItem>
                        <MenuItem eventKey={3.2}>Action #2</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Logout</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;