import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctorsData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDoctors(data);
      });
  }, []);
  return (
    <div className="my-4 container">
      <h2 className="my-3">Special Consultants</h2>
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
