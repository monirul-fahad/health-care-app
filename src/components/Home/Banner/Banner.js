import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-white text-start">
            <h1 className="fw-bold">
              We <span className="text-info">care,</span> We{" "}
              <span className="text-info">Help.</span>
            </h1>
            <p className="fs-4">
              We Care Hospitals Limited is a tertiary care hospital and the
              leading contributor of private healthcare services in Bangladesh.
            </p>
            <button className="btn btn-primary" id="doctors">
              Make an Appointment{" "}
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
