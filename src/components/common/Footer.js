import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us for any inquiries or collaboration.</p>
          <div className="address">
            <i className="fas fa-map-marker-alt"></i>
            <span>123 Main Street, Cityville, Country</span>
          </div>
          <div className="phone">
            <i className="fas fa-phone"></i>
            <span>(123) 456-7890</span>
          </div>
          <div className="email">
            <i className="far fa-envelope"></i>
            <span>info@example.com</span>
          </div>
        </div>
        <div className="social-media">
          <h2>Connect With Us</h2>
          <div className="social-icons">
            <a href="./" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="./" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="./" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="./" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
