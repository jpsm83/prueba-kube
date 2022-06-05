import React from "react";
import "./Logo.css";
import logo from "../../logo.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} className="react-logo" alt="logo" />
    </div>
  );
};

export default Logo;
