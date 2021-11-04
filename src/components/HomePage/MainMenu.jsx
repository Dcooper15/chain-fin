import React from "react";
import {
  SectorMenuHome,
  MenuRow,
  ColumnRight,
  ColumnRightDummy,
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
        <MenuRow>
          <ColumnLeft>
            <StyledLink to="/trendingwsb">Trending - WSB</StyledLink>
          </ColumnLeft>

          <ColumnRightDummy></ColumnRightDummy>
        </MenuRow>
      </SectorMenuHome>
    </>
  );
};

export default MainMenu;
