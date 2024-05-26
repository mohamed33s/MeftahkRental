import React from "react";
import Logoimg from "./Media/car-key.ico";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="Navbar bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logoimg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            مفتاحك
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-autos">
              <Nav.Link href="/">الرئسية</Nav.Link>
              <Nav.Link href="/rating">قيمنا</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
