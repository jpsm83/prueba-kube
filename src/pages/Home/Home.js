import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import InputUser from "../../components/InputUser/InputUser";
import "./Home.css";

const Home = () => {
  const [activeButton, setActiveButton] = useState(true);
  const [inactiveButton, setInactiveButton] = useState(false);

  const toggleButton = (e) => {
    setActiveButton(!activeButton);
    setInactiveButton(!inactiveButton);
  };

  return (
    <div className="homeContainer">
      <div className="topButtonsContainer">
        <div
          style={{
            paddingRight: "25px",
            borderRight: "1px rgb(227, 227, 227) solid",
          }}
        >
          <Button
            data-testid="isActive"
            buttonName="Active"
            isActive={activeButton}
            toggleButton={(e) => toggleButton(e)}
          />
        </div>
        <div style={{ paddingLeft: "25px" }}>
          <Button
            buttonName="Inactive"
            isActive={inactiveButton}
            toggleButton={(e) => toggleButton(e)}
          />
        </div>
      </div>
      <div className="inputSendContainer">
        <InputUser
          isActive={activeButton}
          toggleButton={(e) => toggleButton(e)}
        />
        <Logo />
      </div>
    </div>
  );
};

export default Home;
