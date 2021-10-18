import React from "react";
import { Link } from "react-router-dom";

import "./Register.css";

const Register = () => {
  return (
    <div className="text-center container centered my-5 signUp">
      <form
        className="formStyle container p-5"
        action=""
        onSubmit="{handleSignup}"
      >
        <h3 className="pb-4">Create an account</h3>
        <input
          name="name"
          className="form-control"
          type="text"
          onBlur="{handleName}"
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          name="email"
          className="form-control"
          onBlur="{handleEmail}"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          type="password"
          id="password"
          className="form-control"
          onBlur="{handlePassword}"
          name="password"
          placeholder="Your Password"
          required
        />
        <br />
        <input
          type="password"
          id="confirm_password"
          name="conformPassword"
          className="form-control"
          onBlur=""
          placeholder="Conform Password"
        />
        <br />
        <input
          style={{ background: "#2053C9", color: "#fff" }}
          type="submit"
          className="form-control"
          value="Create an account"
        />
        <p>
          {" "}
          Already have an account ?{" "}
          <Link style={{ color: "red" }} to="/login">
            {" "}
            Login{" "}
          </Link>{" "}
        </p>

        <p style={{ color: "red" }}>error</p>
      </form>
    </div>
  );
};

export default Register;
