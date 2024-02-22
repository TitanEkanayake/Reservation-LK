import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar1 = () => {
  const { pathname } = useLocation();
  const UserNav = ["/CustomerLogin", "/CustomerSignup"];
  const CompNav = ["/Companylogin", "/CompanySignup"];

  // Function to check if the current path is the user login page
  const isHomePage = () => pathname === "/";
  const isUserLoginPage = () =>
    UserNav.findIndex((e) => e.toLowerCase() === pathname.toLowerCase()) !== -1;
  const isCompanyLoginPage = () =>
    CompNav.findIndex((e) => e.toLowerCase() === pathname.toLowerCase()) !== -1;
  return (
    <nav className="h-navbar">
      <div className="h-logo">Reservation LK</div>
      <ul className="h-nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Conditionally render "About Us" and "Contact Us" button on the user login page */}
        {isHomePage() && (
          <>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </>
        )}
        {/* Conditionally render "as company" button on the user login page */}
        {isUserLoginPage() && (
          <li>
            <Link to="/Companylogin">Continue As a Company ?</Link>
          </li>
        )}
        {isCompanyLoginPage() && (
          <li>
            <Link to="/Customerlogin">Continue As a Customer ?</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar1;
