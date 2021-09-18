import React from "react";
import { Route } from "react-router-dom";
import {
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
      <div>
        <Route path="/topmovers">
          <SectorHeader>Today's Top Movers</SectorHeader>
          <SectorMenu>
            <MenuRow>
              <ColumnLeft>
                <h3>
                  <StyledLink to="/topmovers/compx">NASDAQ</StyledLink>
                </h3>
              </ColumnLeft>
              <ColumnRight>
                <h3>
                  <StyledLink to="/topmovers/spx.x">SPX</StyledLink>
                </h3>
              </ColumnRight>
            </MenuRow>

            <MenuRowExtra>
              <ColumnLeft>
                <h3>
                  <StyledLink to="/topmovers/dji">DJI</StyledLink>
                </h3>
              </ColumnLeft>
            </MenuRowExtra>
          </SectorMenu>
        </Route>
      </div>
    </>
  );
};

export default MainTopMovers;
