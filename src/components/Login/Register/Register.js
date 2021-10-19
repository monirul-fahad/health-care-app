import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import "./Register.css";

const Register = () => {
  const { handleUserRegister, handleUserName } = useFirebase();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    handleUserRegister(email, password);
    handleUserName(name);
  };

  return (
    <div className="text-center container centered my-5 signUp">
      <form
        className="formStyle container p-5"
        action=""
        onSubmit={handleSignUp}
      >
        <h3 className="pb-4">Create an account</h3>
        <input
          type="text"
          name="name"
          className="form-control"
          onBlur={handleNameChange}
          placeholder="Your Name"
          required
        />
        <br />
        <input
          type="text"
          name="email"
          className="form-control"
          onBlur={handleEmailChange}
          placeholder="Your Email"
          required
        />
        <br />
        <input
          type="password"
          id="password"
          className="form-control"
          onBlur={handlePasswordChange}
          name="password"
          placeholder="Your Password"
          required
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
