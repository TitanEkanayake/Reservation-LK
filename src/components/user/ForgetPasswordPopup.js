import React, { useState } from 'react';
import './ForgetPasswordPopup.css';

const ForgetPasswordPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your forget password logic here
    console.log('Password reset email sent to:', email);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>Forgot Password?</h2>
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>
        <div className="popup-content">
          <p>Please enter your email address to reset your password.</p>
          <form className='pop-form' onSubmit={handleSubmit}>
            <label className='pop-label'>Email:</label>
            <input
            className='pop-input'
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button className='pop-submit' type="submit">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPopup;
