import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo-2.png";
const Navbar = () => {
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
              <Link to="/home" className="nav-link fs-5">
                Consultants
              </Link>

              <Link to="/home" className="nav-link fs-5">
                Contact
              </Link>
            </div>
            <div className="d-flex">
              <h5>
                Signed in as: <a href="#login">Mark Otto</a>
              </h5>
              <Link to="/login">
                <button className="btn btn-warning me-2">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-success me-2">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
