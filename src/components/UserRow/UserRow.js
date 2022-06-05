import React from "react";
import "./UserRow.css";
import { TrashIcon } from "@heroicons/react/solid";

const UserRow = ({ name, image, age, country, refreshState }) => {
  const removeUser = (userToRemove) => {
    const newUserList = JSON.parse(localStorage.getItem("allUsers"));
    for (let i = 0; i < newUserList.length; i++) {
      if (newUserList[i].image === userToRemove) {
        newUserList.splice(i, 1);
        localStorage.setItem("allUsers", JSON.stringify(newUserList));
      }
    }
    refreshState();
  };

  return (
    <div className="userContainer">
      <div className="userDetailsTop">
        <img
          data-testid="userPhoto"
          className="userPhoto"
          src={image}
          alt={`${name} photo`}
        />
        <h2 data-testid="userName" className="userName">
          {name.length > 20 ? name.substr(0, 15) + "..." : name}
        </h2>
        <div className="iconPosition">
          <TrashIcon className="iconDelete" onClick={() => removeUser(image)} />
        </div>
      </div>
      <div className="userDetailBotton">
        <h3 data-testid="userCountry">Fron {country}</h3>
        <h3 data-testid="userAge">{age} yo</h3>
      </div>
    </div>
  );
};

export default UserRow;
