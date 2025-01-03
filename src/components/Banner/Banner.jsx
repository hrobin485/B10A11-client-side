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
          src="https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"alt="Group Study Illustration"
        />
      </div>
    </div>
  );
};

export default Banner;