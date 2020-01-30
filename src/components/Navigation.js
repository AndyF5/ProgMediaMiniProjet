import React from "react";

//  Elements de structure, Router et REDUX
import { LinkContainer } from "react-router-bootstrap";

//  Elements Bootstrap
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

//  Icons
import { FaHome } from "react-icons/fa";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>
            <FaHome className="mb-1" /> Home
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="root-navbar-nav" />
        <Navbar.Collapse id="root-navbar-nav">
          <Nav>
            <NavDropdown title="Espaces" id="collabsible-nav-dropdown-espaces">
              <NavDropdown.Item>
                <LinkContainer to="/client">
                  <NavItem>Client</NavItem>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/vendeur">
                  <NavItem>Vendeur</NavItem>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
