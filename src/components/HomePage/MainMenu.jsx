import React from "react";
import {
  SectorMenuHome,
  MenuRow,
  ColumnRight,
  ColumnLeft,
  StyledLink,
} from "../Styles/styledElements";

const MainMenu = () => {
  return (
    <>
      <SectorMenuHome>
        <MenuRow>
          <ColumnLeft>
            <StyledLink to="/sector">Sectors</StyledLink>
          </ColumnLeft>

          <ColumnRight>
            <StyledLink to="/topmovers">Movers</StyledLink>
          </ColumnRight>
        </MenuRow>
      </SectorMenuHome>
    </>
  );
};

export default MainMenu;
