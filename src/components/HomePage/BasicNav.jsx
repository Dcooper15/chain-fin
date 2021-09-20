import React from "react";
import { StyledNavLink, 
  StyledNavbar 
} from "../Styles/styledElements";
import { Button } from "@material-ui/core";
import { GiBlackKnightHelm, GiLightningSaber } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

const BasicNav = ({ lightDarkChange, theme }) => {
  return (
    <StyledNavbar>
      <Button
        startIcon={
          <StyledNavLink to="/">
            <IoHome />
          </StyledNavLink>
        }
        size="medium"
        style={{ padding: "1px", marginTop: "3px", marginRight: "0px" }}
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
        style={{ padding: "1px", marginLeft: "0px" }}
      ></Button>{" "}
    </StyledNavbar>
  );
};

export default BasicNav;
