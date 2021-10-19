import React from "react";
import "./About.css";
import docImg from "../../../images/docImg.png";
import { FaHeartbeat, FaStethoscope, FaRegClock } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="py-5">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img className="img-fluid" src={docImg} alt="" />
          </div>
          <div className="col-md-7 text-start">
            <h3 className="about-heading">About We Care..</h3>
            <h2>We Provide Essential Services For Your Health Care</h2>
            <p className="fs-5">
              What is in a hospital? A hospital contains one or more wards that
              house hospital beds for inpatients. That's where we are experts
              and promised, as well as a range of medical specialty departments.
              A well-equipped hospital may be classified as a trauma center.
            </p>

            <div className="row">
              <div className="col-6 d-md-flex d-block  about-details">
                <div>
                  <FaHeartbeat className="icons" />
                </div>
                <div>
                  <h4>Quality of Care Services</h4>
                  <p>
                    We are the best in term of service and care in the town.
                  </p>
                </div>
              </div>
              <div className="col-6 d-md-flex d-block   about-details">
                <div>
                  <FaStethoscope className="icons" />
                </div>
                <div>
                  <h4>Standards of Treatment</h4>
                  <p>We are the best in term of treatment also in the town.</p>
                </div>
              </div>
              <div className="col-6 d-md-flex d-block   about-details">
                <div>
                  <RiMedicineBottleLine className="icons" />
                </div>
                <div>
                  <h4>Infection Prevention</h4>
                  <p>We have the best medicine supplies. promise that.</p>
                </div>
              </div>
              <div className="col-6 d-md-flex d-block  about-details">
                <div>
                  <FaRegClock className="icons" />
                </div>
                <div>
                  <h4>24/7 Working Time</h4>
                  <p>We are here 25/7 for you. come anytime when you need.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
