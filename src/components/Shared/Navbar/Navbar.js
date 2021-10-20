import React from "react";
import { Button, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo-2.png";

import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
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
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            We Care
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Nav.Link className="text-white fs-5" as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white fs-5"
              as={HashLink}
              to="/home#doctors"
            >
              Find a Doctor
            </Nav.Link>
            <Nav.Link
              className="text-white fs-5"
              as={HashLink}
              to="/home#about"
            >
              About Us
            </Nav.Link>
            <Nav.Link className="text-white fs-5" as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link className="text-white fs-5" as={Link} to="/contact">
              Contact Us
            </Nav.Link>

            <Navbar.Text>
              Signed in as:{" "}
              <span className="fs-5 text-info fw-bold">
                {user?.displayName}
              </span>{" "}
            </Navbar.Text>
            {user?.email ? (
              <Button onClick={logOut} variant="light" className="ms-2">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                {" "}
                <button className="btn btn-warning">Sign In</button>{" "}
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
