import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Login as UserLogin } from "./components/user/Login";
import { Login as CompanyLogin } from "./components/company/Login";
import { Signup as UserSignup } from "./components/user/Signup";
import { Signup as CompanySignup } from "./components/company/Signup";
import Home from "./components/common/Home";
import Navbar1 from "./components/common/Navbar";

function App() {
  const { pathname } = useLocation();
  const navEnabled = [
    "/",
    "/CustomerLogin",
    "/Companylogin",
    "/CustomerSignup",
    "/Companysignup",
  ];

  const enableNav = () =>
    navEnabled.findIndex((e) => e.toLowerCase() === pathname.toLowerCase()) !==
    -1;

  return (
    <div className="app">
      {enableNav() && <Navbar1 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CustomerLogin" element={<UserLogin />} />
        <Route path="/CustomerSignup" element={<UserSignup />} />
        <Route path="/Companylogin" element={<CompanyLogin />} />
        <Route path="/Companysignup" element={<CompanySignup />} />
      </Routes>
    </div>
  );
}

export default App;
