import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Doctor-Details.css";
const DoctorDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("/doctorsData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const ExactData = data.filter((td) => td.id === id);
  return (
    <div className="container mt-5">
      <h1>{ExactData[0]?.name}</h1>
      <p className="fw-bold">{ExactData[0]?.qualifications}</p>
      <div className=" row">
        <div className="col-md-9">
          <div className="row  align-items-center">
            <div className=" col-md-5">
              <img className="doc-img" src={ExactData[0]?.img} alt="" />
            </div>
            <div className="doc-text col-md-7">
              <h5>
                {" "}
                <span className="lh-lg text-danger">Specialty:</span>{" "}
                {ExactData[0]?.specialist}
              </h5>
              <h5>
                {" "}
                <span className="lh-lg text-danger">Designation:</span>{" "}
                {ExactData[0]?.designation}
              </h5>
              <h5>
                {" "}
                <span className="lh-lg text-danger">Language Speaks:</span>{" "}
                {ExactData[0]?.language}
              </h5>
              <h5>
                {" "}
                <span className="lh-lg text-danger">Institute:</span>{" "}
                {ExactData[0]?.institute}
              </h5>
              <h5>
                {" "}
                <span className="lh-lg text-danger">Chamber Time:</span>{" "}
                {ExactData[0]?.time}.{" "}
                <span className=" text-danger">Off Day:</span>{" "}
                {ExactData[0]?.offDay}
              </h5>

              <h5>
                {" "}
                <span className="lh-lg text-danger">Floor Number:</span>{" "}
                {ExactData[0]?.floor},{" "}
                <span className="text-danger">Room Number:</span>{" "}
                {ExactData[0]?.room}
              </h5>
              <h5>
                {" "}
                <span className="lh-lg text-danger">Fees:</span>{" "}
                {ExactData[0]?.fee} (First Visit). {ExactData[0]?.fee2} (Next
                Visit)
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 border-start border-primary border-2 pt-4 ">
          <h5>Book Your Appointment</h5>
          <div className="">
            <input
              className="input-style"
              type="text"
              name=""
              id=""
              placeholder="pataints Name"
            />
            <input
              className="input-style"
              type="text"
              name=""
              id=""
              placeholder="Problems"
            />
            <input
              className="input-style"
              type="number"
              name=""
              id=""
              placeholder="visit time"
            />{" "}
            <br />
            <input
              type="checkbox"
              name="First-time"
              id=""
              value="First Time"
            />{" "}
            <label htmlFor="First-time">First Time</label>{" "}
            <input type="checkbox" name="First-time" id="" value="First Time" />{" "}
            <label htmlFor="First-time">Second Time</label>
            <input
              className="input-style bg-success text-white fw-bold"
              type="submit"
              name=""
              id=""
              value="Confirm Appointment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
