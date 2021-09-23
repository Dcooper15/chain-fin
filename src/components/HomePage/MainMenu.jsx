import React from "react";
import {
  SectorMenuHome,
  MenuRowHome,
  ColumnRightHome,
  ColumnLeftHome,
  StyledMainMenuLink,
} from "../Styles/styledElements";

const MainMenu = () => {
  return (
    <>
      <SectorMenuHome>
        <MenuRowHome>
          <ColumnLeftHome>
            <StyledMainMenuLink to="/sector">Sectors</StyledMainMenuLink>
          </ColumnLeftHome>

          <ColumnRightHome>
            <StyledMainMenuLink to="/topmovers">Movers</StyledMainMenuLink>
          </ColumnRightHome>
        </MenuRowHome>
      </SectorMenuHome>
    </>
  );
};

export default MainMenu;
