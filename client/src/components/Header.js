import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand style={{
            background: '-webkit-linear-gradient(45deg, #FEC163, #DE4313)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          }}>
            Glow Girl
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav  ">
          <Nav className="ml-auto"> {/* add mr-auto class to move nav items to the left */}

            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/login"><i className='fas fa-user'></i>Login</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
