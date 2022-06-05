import React from "react";
import "./Button.css";

const Button = ({ buttonName, isActive, toggleButton }) => {
  return (
    <button
      onClick={toggleButton}
      className={`mainButtons ${
        isActive === true ? "activedButton" : "inactivedButton"
      }`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
