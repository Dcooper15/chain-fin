import React from "react";
import {
  SectorContainer,
  SectorMenu,
  MenuRow,
  ColumnRight,
  ColumnLeft,
  StyledLink,
  SectorHeader,
} from "../Styles/styledElements";
import { Route } from "react-router-dom";

const MainSectors = () => {
  return (
    <>
      <SectorContainer>
        <Route path="/sector">
          <SectorHeader>Sectors</SectorHeader>
          <SectorMenu>
            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/sector/finance">Finance</StyledLink>
              </ColumnLeft>
              <ColumnRight>
                <StyledLink to="/sector/entertainment">
                  Entertainment
                </StyledLink>
              </ColumnRight>
            </MenuRow>

            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/sector/tech">Tech</StyledLink>
              </ColumnLeft>
              <ColumnRight>
                <StyledLink to="/sector/airline">Airline</StyledLink>
              </ColumnRight>
            </MenuRow>
            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/sector/oil">Oil</StyledLink>
              </ColumnLeft>
              <ColumnRight>
                <StyledLink to="/sector/cannabis">Cannabis</StyledLink>
              </ColumnRight>
            </MenuRow>
            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/sector/pharmaceutics">
                  Pharmaceutics
                </StyledLink>
              </ColumnLeft>
              <ColumnRight>
                <StyledLink to="/sector/energy">Alternative Energy</StyledLink>
              </ColumnRight>
            </MenuRow>
            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/sector/automotive">Automotive</StyledLink>
              </ColumnLeft>
              <ColumnRight>
                <StyledLink to="/sector/grocery">Grocery</StyledLink>
              </ColumnRight>
            </MenuRow>
            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/sector/crypto">Crypto</StyledLink>
              </ColumnLeft>
              <ColumnRight>
                <StyledLink to="/sector/social">Social Media</StyledLink>
              </ColumnRight>
            </MenuRow>
          </SectorMenu>
        </Route>
      </SectorContainer>
    </>
  );
};

export default MainSectors;
