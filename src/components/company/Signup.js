import React, { useState } from "react";
import "./CSignup.css";
import { Link } from "react-router-dom";
export const Signup = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <div className="csu-container">
      <div className="csu-box">
        <div className="csu-background-image"></div>
        <div className="csu-signup-content">
          <h2 className="csu-h2">COMPANY SIGN-UP</h2>
          <form className="csu-form">
            {/* Step 1: Collect Email */}
            {step === 1 && (
              <>
                <label className="csu-label" htmlFor="email">
                  E-Mail:
                </label>
                <input
                  className="csu-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter organization email"
                />
                <button
                  className="csu-next-btn"
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
                <label className="csu-label" htmlFor="username">
                  Company Name:
                </label>
                <input
                  className="csu-input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter organization name"
                />
                <label className="csu-label" htmlFor="username">
                  Phone Number:
                </label>
                <input
                  className="csu-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter organization phone number"
                />
                <label className="csu-label" htmlFor="username">
                  Password:
                </label>
                <input
                  className="csu-input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <label className="csu-label" htmlFor="username">
                  Email OTP
                </label>
                <input
                  className="csu-input"
                  type="password"
                  id="otp"
                  name="otp"
                  placeholder="Enter your OTP"
                />
                <button className="csu-signup-btn" type="submit">
                  Sign up
                </button>
              </>
            )}
          </form>
          <p className="csu-login-link">
            Already have an account? <Link to="/Companylogin">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
