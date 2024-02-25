import React, { useState } from "react";

import "./CLogin.css";
import { Link } from "react-router-dom";
import ForgetPasswordPopup from "../user/ForgetPasswordPopup";

export const Login = () => {
  const [isForgetPasswordPopupOpen, setForgetPasswordPopupOpen] =
    useState(false);

  const handleForgetPasswordClick = (e) => {
    e.preventDefault();
    setForgetPasswordPopupOpen(true);
  };

  const handleCloseForgetPasswordPopup = (e) => {
    e.preventDefault();
    setForgetPasswordPopupOpen(false);
  };
  return (
    <div className="cl-container">
      <div className="cl-login-box">
        <div className="cl-background-image"></div>
        <div className="cl-login-content">
          <h2 className="cl-h2">COMPANY LOGIN</h2>
          <form className="cl-form">
            <label className="cl-label" htmlFor="username">
              Username:
            </label>
            <input
              className="cl-input"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />

            <label className="cl-label" htmlFor="password">
              Password:
            </label>
            <input
              className="cl-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <div>
              <button
                className="ul-forgetpassword-btn"
                onClick={handleForgetPasswordClick}
              >
                Forgot Password?
              </button>
              {isForgetPasswordPopupOpen && (
                <ForgetPasswordPopup onClose={handleCloseForgetPasswordPopup} />
              )}
            </div>
            <button className="cl-login-btn" type="submit">
              Login
            </button>
          </form>
          <p className="c-signup-link">
            Don't have an account? <Link to="/CompanySignup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
