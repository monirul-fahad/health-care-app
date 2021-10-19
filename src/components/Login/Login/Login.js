import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import googleImg from "../../../images/logo/google.png";
import "./Login.css";
const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  console.log("came from", location.state?.from);
  return (
    <div className="text-center container  my-5 login">
      <form className="formStyle container p-5" action="">
        <h3 className="pb-4">Login your account</h3>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Your Email "
          required
        />
        <br />
        <input
          type="password"
          id="password"
          className="form-control"
          name="password"
          placeholder="Your Password"
          required
        />
        <br />
        <input
          style={{ background: "#2053C9", color: "#fff" }}
          type="submit"
          className="form-control"
          value="Login"
        />
        <p>
          Don’t have an account?{" "}
          <Link className="text-danger" to="/signup">
            Create an account
          </Link>{" "}
        </p>
        <p style={{ color: "red" }}>Error</p>
      </form>
      <button
        className="google-button centered rounded-pill"
        onClick={signInUsingGoogle}
      >
        {" "}
        <img src={googleImg} alt="google" /> Continue with Google{" "}
      </button>
    </div>
  );
};

export default Login;
