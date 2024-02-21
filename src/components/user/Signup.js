import React from "react";
import "./USignup.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="usu-h2">USER SIGN-UP</h2>
        <form className="usu-form">
          <label className="usu-label" htmlFor="username">
            Full Name :
          </label>
          <input
            className="usu-input"
            type="text"
            id="username"
            name="username"
            placeholder="Enter full name"
          />

          <label className="usu-label" htmlFor="password">
            E-Mail:
          </label>
          <input
            className="usu-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your email"
          />
          <label className="usu-label" htmlFor="password">
            Password:
          </label>
          <input
            className="usu-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <label className="usu-label" htmlFor="password">
            Retype Password:
          </label>
          <input
            className="usu-input"
            type="password"
            id="password"
            name="password"
            placeholder="Retype your password"
          />
          <button className="usu-signup-btn" type="submit">
            Sign in
          </button>
        </form>
        <p className="signup-link">
          Alredy have an account? <Link to="/CustomerLogin">Login</Link>
        </p>
      </div>
    </div>
  );
};
