import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo/logo-2.png";
const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="d-flex">
            <img src={logo} style={{ height: "40px", width: "90px" }} alt="" />
            {/* <h1 className="navbar-brand">
              we <br />
              care
            </h1> */}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link to="/home" className="nav-link fs-5">
                Home
              </Link>
              <Link to="/service" className="nav-link fs-5">
                About us
              </Link>
              <Link to="/home" href="#doctor" className="nav-link fs-5">
                Find a Doctor
              </Link>

              <Link to="/home" className="nav-link fs-5">
                Contact
              </Link>
            </div>
            <div className="d-lg-flex align-items-center block">
              <h5 className="pe-3">
                Signed in as: <a href="#login">{user?.displayName}</a>
              </h5>
              {user?.email ? (
                <Button variant="dark">Log Out</Button>
              ) : (
                <>
                  {" "}
                  <Link to="/login">
                    <button className="btn btn-warning me-2">Log In</button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn btn-success me-2">Sign Up</button>
                  </Link>{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
