import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-white text-start">
            <h1>We care, We Help.</h1>
            <p className="fs-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur ipsa fuga voluptatem cumque, maxime voluptate?
            </p>
            <button className="btn btn-primary">Make an Appointment </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
