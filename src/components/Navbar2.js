import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
// import { HashLink } from "react-router-hash-link";

const Navbar2 = () => {
  // const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Genius Car</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/home#home">Home</Nav.Link>
            <Nav.Link href="/home#services">Services</Nav.Link>
            <Nav.Link href="/home#experts">Experts</Nav.Link>

            <Button onClick="" variant="light">
              Logout
            </Button>

            <Nav.Link href="/login"> Login </Nav.Link>

            <Navbar.Text>
              Signed in as: <a href="#login">displayName</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar2;
