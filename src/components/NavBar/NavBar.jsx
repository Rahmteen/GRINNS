import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Fragment>
      <Navbar className="nav-container py-2" variant="light">
        <Container className="px-2">
          <Navbar.Brand style={{fontSize: '2em'}} href="/">GRINNS</Navbar.Brand>
          <Nav style={{fontSize: '1.2em'}} className="ml-auto">
            <Nav.Link target="_blank" href="https://grinns.shop">merch</Nav.Link>
            <Nav.Link target="_blank" href="https://www.bandsintown.com/a/10625889-the-grinns">tour</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
