import React from "react";
import { Route } from "react-router-dom";
import {
  SectorContainer,
  SectorMenu,
  MenuRow,
  ColumnRight,
  ColumnLeft,
  StyledLink,
  SectorHeader,
  ColumnRightDummy
} from "../Styles/styledElements";

const MainTopMovers = () => {
  return (
    <>
      <SectorContainer>
        <Route path="/topmovers">
          <SectorHeader>Today's Top Movers</SectorHeader>
          <SectorMenu>
            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/topmovers/compx">NASDAQ</StyledLink>
              </ColumnLeft>
              <ColumnRight>
                <StyledLink to="/topmovers/spx.x">SPX</StyledLink>
              </ColumnRight>
            </MenuRow>

            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/topmovers/dji">DJI</StyledLink>
              </ColumnLeft>

              <ColumnRight>
                <StyledLink to="/topmovers/general">General</StyledLink>
              </ColumnRight>
            </MenuRow>
            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/topmovers/mostactive">Most Active</StyledLink>
              </ColumnLeft>
              <ColumnRightDummy></ColumnRightDummy>
            </MenuRow>
            
          </SectorMenu>
        </Route>
      </SectorContainer>
    </>
  );
};

export default MainTopMovers;
