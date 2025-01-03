import React from "react";
import "./Banner.css"; // Import CSS styles

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Welcome to StudyHive</h1>
        <p className="banner-subtitle">
          Collaborate with friends, complete assignments, and grow together!
        </p>
        <button className="banner-button">Get Started</button>
      </div>
      <div className="banner-image">
        <img
          src="https://via.placeholder.com/500" // Replace with an actual banner image
          alt="Group Study Illustration"
        />
      </div>
    </div>
  );
};

export default Banner;
