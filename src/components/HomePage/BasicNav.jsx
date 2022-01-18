import React, { useState } from "react";
import { StyledNavLink, StyledNavbar } from "../Styles/styledElements";
import { Button } from "@material-ui/core";
import { FaUserAstronaut, FaCloudSun } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoIosCloudyNight } from "react-icons/io";

const BasicNav = ({ lightDarkChange, theme }) => {
  const [userMessage, setUserMessage] = useState([]);
  const handleUserClick = () => {
    userMessage.length
      ? setUserMessage([])
      : setUserMessage("Profile/Settings coming soon");
  };
  return (
    <StyledNavbar>
      <Button
        startIcon={
          <StyledNavLink to="/">
            <IoHome />
          </StyledNavLink>
        }
        size="medium"
      ></Button>
      <Button
        startIcon={
          theme === "light" ? (
            <IoIosCloudyNight style={{ color: "#00afc9" }} />
          ) : (
            <FaCloudSun style={{ color: "#d4af37" }} />
          )
        }
        onClick={lightDarkChange}
        size="medium"
      ></Button>{" "}
      <Button
        onClick={handleUserClick}
        startIcon={
          <FaUserAstronaut
            style={{ color: theme === "light" ? "#00afc9" : "#d4af37" }}
          />
        }
        size="medium"
      ></Button>
      <br></br>
      
      <i style={{ fontSize: "10px" }}>{userMessage}</i>
    </StyledNavbar>
  );
};

export default BasicNav;
