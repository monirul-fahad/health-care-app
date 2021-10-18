import React from "react";
import "./Doctor.css";
const Doctor = (props) => {
  const { name, img, department, time } = props.doctor;
  return (
    <div className="doctor pb-3">
      <img src={img} alt="" />
      <div className="doctor-text text-start">
        <h3>{name}</h3>
        <h5>{department}</h5>
        <h6>{time} everyday</h6>
      </div>
      <button className="btn btn-primary">Book Appointment</button>
    </div>
  );
};

export default Doctor;
