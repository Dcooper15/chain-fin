import React, { useState } from "react";
import { StyledNavLink, StyledNavbar } from "../Styles/styledElements";
import { Button } from "@material-ui/core";
import { GiBlackKnightHelm, GiLightningSaber } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const BasicNav = ({ lightDarkChange, theme }) => {
  const [userMessage, setUserMessage] = useState([]);
  console.log(userMessage);
  const handleUserClick = () => {
  userMessage.length ? setUserMessage([]) : setUserMessage('Profile/Settings coming soon');
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
            <GiBlackKnightHelm style={{ color: "#00afc9" }} />
          ) : (
            <GiLightningSaber style={{ color: "#d4af37" }} />
          )
        }
        onClick={lightDarkChange}
        size="medium"
      ></Button>{" "}
      <Button
      onClick={handleUserClick}
        startIcon={
          <StyledNavLink>
            <FaUserAstronaut />
          </StyledNavLink>
        }
        size="medium"
      ></Button><br></br><i style={{fontSize: '10px'}}
      
      
      >{userMessage}</i>
    </StyledNavbar>
  );
};

export default BasicNav;
