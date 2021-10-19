import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact-page">
      <div style={{ maxWidth: "700px" }} className="container text-center p-3">
        <h2 className="pt-5 pb-2">Have a Question?</h2>
        <h5 className="pb-3">Feel free to ask.</h5>
        <from>
          <input
            type="text"
            className="form-control"
            name="name"
            id=""
            placeholder="Your Name.."
          />
          <br />
          <input
            type="email"
            className="form-control"
            name="email"
            id=""
            placeholder="Your Email"
          />
          <br />
          <textarea
            name="textarea"
            className="form-control"
            id=""
            cols="30"
            rows="5"
            placeholder="Massage"
          />

          <button className="btn btn-success mt-4 px-5">SEND MASSAGE</button>
        </from>
      </div>
    </section>
  );
};

export default Contact;
