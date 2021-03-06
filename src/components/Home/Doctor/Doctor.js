import React from "react";
import { Link } from "react-router-dom";
import "./Doctor.css";
const Doctor = (props) => {
  const { name, img, department, time, id, descrip } = props.doctor;
  return (
    <div className="doctor pb-3">
      <img src={img} alt="" />
      <div className="doctor-text text-start">
        <h3>{name}</h3>
        <h5>{department}</h5>
        <p>{descrip}</p>
      </div>
      <Link to={`/doctorDetails/${id}`}>
        <button className="btn btn-primary">Book Appointment</button>
      </Link>
    </div>
  );
};

export default Doctor;
