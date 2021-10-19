import React from "react";
import "./Footer.css";
import footerImg from "../../../images/logo/logo-1.png";
const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container">
        <div className="footer row">
          <div className="col-md-6 col-12 text-center text-md-start">
            <img
              className="img-fluid mb-3"
              src={footerImg}
              alt="logo of footer"
              width="150"
              height="50"
            />
          </div>
          <div className="ul-style col-md-3 col-6">
            <ul>
              <li>
                <a href="#">Medical News</a>
              </li>
              <li>
                <a href="#">Read Our Blogs</a>
              </li>
              <li>
                <a href="#">Drug / Medicines</a>
              </li>
              <li>
                <a href="#">Diagnose & Research</a>
              </li>
            </ul>
          </div>
          <div className="ul-style col-md-3 col-6">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Read FAQs</a>
              </li>
              <li>
                <a href="#">Our History</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row  text-white text-start mt-5">
          <div className="col-md-8 col-12">
            Copyrights &copy; 2021 Monirul Fahad
          </div>
          <div className="col-md-4 col-12">
            <div className="d-flex justify-content-between">
              <p>Privacy & Policy</p>
              <p>Terms of Services</p>
              <p>Company History</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
