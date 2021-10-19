import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="secondary"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Genius Car</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Nav.Link className="text-white fs-5" as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white fs-5"
              as={HashLink}
              to="/home#services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="text-white fs-5"
              as={HashLink}
              to="/home#experts"
            >
              Experts
            </Nav.Link>
          </Navbar.Collapse>
          <Navbar.Text>
            Signed in as: <a href="#login">{user?.displayName}</a>
          </Navbar.Text>
          {user?.email ? (
            <Button onClick={logOut} variant="light" className="ms-2">
              Logout
            </Button>
          ) : (
            <>
              {" "}
              <Nav.Link as={Link} to="/login">
                {" "}
                <button className="btn btn-warning">Log In</button>{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                {" "}
                <button className="btn btn-success">Sign Up</button>{" "}
              </Nav.Link>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
