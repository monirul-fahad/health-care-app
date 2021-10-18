import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="text-center container centered my-5 login">
      <form
        className="formStyle container p-5"
        action=""
        onSubmit="{handleSubmit}"
      >
        <h3 className="pb-4">Login your account</h3>
        <input
          type="text"
          name="email"
          className="form-control"
          onBlur="{handleBlur}"
          placeholder="Your Email "
          required
        />
        <br />
        <input
          type="password"
          id="password"
          className="form-control"
          onBlur="{handleBlur}"
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
    </div>
  );
};

export default Login;
