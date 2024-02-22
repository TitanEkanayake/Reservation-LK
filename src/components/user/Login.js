import React from "react";
import "./ULogin.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="ul-container">
      <div className="ul-box">
        <div className="ul-background-image"></div>
        <div className="ul-login-content">
          <h2 className="ul-h2">USER LOGIN</h2>
          <form className="ul-form">
            <label className="ul-label" htmlFor="username">
              Username:
            </label>
            <input
              className="ul-input"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />

            <label className="ul-label" htmlFor="password">
              Password:
            </label>
            <input
              className="ul-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />

            <button className="ul-login-btn" type="submit">
              Login
            </button>
          </form>
          <p className="signup-link">
            Don't have an account? <Link to="/CustomerSignup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
