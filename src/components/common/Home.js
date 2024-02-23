import React from "react";
import "./Home.css";
import v1 from "../../assets/videos/v1.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-hero-container">
      <video autoPlay loop muted className="h-video">
        <source src={v1} type="video/MP4" />
      </video>
      <h1 className="h-main-heading">Future Reservation AWAITS</h1>
      <p className="h-main-paragraph">What are you waiting for?</p>
      <div className="h-hero-btns">
        <Link to="/CustomerLogin">
          <button className="h-start-btn" type="submit">
            GET STARTED
          </button>
        </Link>
      </div>
      <p className="h-abountus-paragraph">
          Welcome to Reservation LK in here we provide a platform to customers and companies that needs reservation service.
      </p>
    </div>
  );
};

export default Home;
