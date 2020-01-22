import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { FaUserFriends, FaShoppingCart, FaAtlassian } from "react-icons/fa";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Store FBSK</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            <FaAtlassian />
            Acceuil
          </Link>

          <Link to="/Vendeur" className="nav-link">
            <FaUserFriends />
            Vendeur
          </Link>
          <Link to="/Client" className="nav-link">
            <FaShoppingCart />
            Client
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
