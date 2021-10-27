import React from "react";
import { Route } from "react-router-dom";
import {
  SectorContainer,
  SectorMenu,
  MenuRow,
  MenuRowExtra,
  ColumnRight,
  ColumnLeft,
  StyledLink,
  SectorHeader,
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

            <MenuRowExtra>
              <ColumnLeft>
                
                  <StyledLink to="/topmovers/dji">DJI</StyledLink>
                
              </ColumnLeft>
            </MenuRowExtra>
          </SectorMenu>
        </Route>
      </SectorContainer>
    </>
  );
};

export default MainTopMovers;
