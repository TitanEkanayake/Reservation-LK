
import React, { useState } from 'react';
import "./ULogin.css";
import { Link } from "react-router-dom";
import ForgetPasswordPopup from './ForgetPasswordPopup';

export const Login = () => {
  const [isForgetPasswordPopupOpen, setForgetPasswordPopupOpen] = useState(false);
  console.log(setForgetPasswordPopupOpen)
  const handleForgetPasswordClick = (e) => {
    e.preventDefault();
    setForgetPasswordPopupOpen(true);
  };

  const handleCloseForgetPasswordPopup = (e) => {
    setForgetPasswordPopupOpen(false);
  };
  return (
    <div className="ul-container">
      <div className="ul-box">
        <div className="ul-background-image"></div>
        <div className="ul-login-content">
          <h2 className="ul-h2">USER LOGIN</h2>
          <form className="ul-form">
            <label className="ul-label" htmlFor="username">
              Email:
            </label>
            <input
              className="ul-input"
              type="email"
              id="Email"
              name="email"
              placeholder="Enter your email"
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
             <div>
      
              <button className="ul-forgetpassword-btn" onClick={handleForgetPasswordClick}>Forgot Password?</button>

              {isForgetPasswordPopupOpen && (
                <ForgetPasswordPopup onClose={handleCloseForgetPasswordPopup} />
              )}
            </div>
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
