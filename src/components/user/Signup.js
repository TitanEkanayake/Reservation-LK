import React, { useState } from "react";
import "./USignup.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };
  console.log(step);
  return (
    <div className="usu-container">
      <div className="usu-box">
        <div className="usu-background-image"></div>
        <div className="usu-signup-content">
          <h2 className="usu-h2">USER SIGN-UP</h2>
          <form className="usu-form">
            {/* Step 1: Collect Email */}
            {step === 1 && (
              <>
                <label className="usu-label" htmlFor="email">
                  E-Mail:
                </label>
                <input
                  className="usu-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <button
                  className="usu-next-btn"
                  type="button"
                  onClick={handleNext}
                >
                  Next
                </button>
              </>
            )}

            {/* Step 2: Collect Additional Details */}
            {step === 2 && (
              <>
                <label className="usu-label" htmlFor="username">
                  Full Name:
                </label>
                <input
                  className="usu-input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter full name"
                />
                <label className="usu-label" htmlFor="username">
                  Phone Number:
                </label>
                <input
                  className="usu-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                />
                <label className="usu-label" htmlFor="username">
                  Password:
                </label>
                <input
                  className="usu-input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <label className="usu-label" htmlFor="username">
                  Email OTP
                </label>
                <input
                  className="usu-input"
                  type="password"
                  id="otp"
                  name="otp"
                  placeholder="Enter your OTP"
                />
                <button className="usu-signup-btn" type="submit">
                  Sign up
                </button>
              </>
            )}
          </form>
          <p className="usu-login-link">
            Already have an account? <Link to="/CustomerLogin">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
