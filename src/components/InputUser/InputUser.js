import React, { useEffect, useState } from "react";
import "./InputUser.css";
import Button from "../Button/Button";
import axios from "axios";
import UserRow from "../UserRow/UserRow";

const InputUser = ({ isActive }) => {
  const [user, setUser] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [allUsers, setAllUsers] = useState();

  const getUser = async (e) => {
    if (isActive) {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?inc=name,location,dob,picture&noinfo"
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      const userDataFormated = {
        image: user.results[0].picture.thumbnail,
        age: user.results[0].dob.age,
        country: user.results[0].location.country,
        name: inputValue
          ? inputValue
          : `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`,
      };
      const usersList = JSON.parse(localStorage.getItem("allUsers")) || [];
      usersList.push(userDataFormated);
      localStorage.setItem("allUsers", JSON.stringify(usersList));
      setUser("");
    }
    refreshState();
  }, [user]);

  const refreshState = () => {
    setAllUsers(JSON.parse(localStorage.getItem("allUsers")));
    setInputValue("");
  };

  const displayUsers = () => {
    return allUsers?.map((user) => {
      return (
        <UserRow
          key={Math.floor(Math.random() * new Date().getMilliseconds())}
          {...user}
          refreshState={() => refreshState()}
        />
      );
    });
  };

  return (
    <div className="inputUserContainer">
      <input
        type="text"
        className="inputUser"
        data-testid="inputUser"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>{displayUsers()} </div>
      <div onClick={(e) => getUser(e)} data-testid="clearInput">
        <Button buttonName="Enviar" isActive={isActive} />
      </div>
    </div>
  );
};

export default InputUser;
