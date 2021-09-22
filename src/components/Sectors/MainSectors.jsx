import React from "react";
import {
  SectorMenu,
  MenuRow,
  ColumnRight,
  ColumnLeft,
  StyledLink,
  SectorHeader
} from "../Styles/styledElements";
import { Route } from "react-router-dom";


const MainSectors = () => {
  return (
    <>
      <div>
        <Route path="/sector">
          <SectorHeader>Sectors</SectorHeader>
          <SectorMenu>
            <MenuRow>
              <ColumnLeft>
                <h3>
                  <StyledLink
                    to="/sector/finance"
                    
                  >
                    Finance
                  </StyledLink>
                </h3>
              </ColumnLeft>
              <ColumnRight>
                <h3>
                  <StyledLink
                    to="/sector/entertainment"
                    
                  >
                    Entertainment
                  </StyledLink>
                </h3>
              </ColumnRight>
            </MenuRow>

            <MenuRow>
              <ColumnLeft>
                <h3>
                  <StyledLink
                    to="/sector/tech"
                   
                  >
                    Tech
                  </StyledLink>
                </h3>
              </ColumnLeft>
              <ColumnRight>
                <h3>
                  <StyledLink 
                    to="/sector/airline"
                
                  >
                    Airline
                  </StyledLink>
                </h3>
              </ColumnRight>
            </MenuRow>
            <MenuRow>
              <ColumnLeft>
                <h3>
                  <StyledLink
                    to="/sector/oil"
                   
                  >
                    Oil
                  </StyledLink>
                </h3>
              </ColumnLeft>
              <ColumnRight>
                <h3>
                  <StyledLink
                    to="/sector/cannabis"
                    
                  >
                    Cannabis
                  </StyledLink>
                </h3>
              </ColumnRight>
            </MenuRow>
            <MenuRow>
              <ColumnLeft>
                <h3>
                  <StyledLink
                    to="/sector/pharmaceutics"
   
                  >
                    Pharmaceutics
                  </StyledLink>
                </h3>
              </ColumnLeft>
              <ColumnRight>
                <h3>
                  <StyledLink
                    to="/sector/energy"
                    style={{fontSize: '3.5vw'}}
                  >
                    Alternative 
                    
                    Energy
                  </StyledLink>
                </h3>
              </ColumnRight>
            </MenuRow>
            <MenuRow>
              <ColumnLeft>
                <h3>
                  <StyledLink
                    to="/sector/automotive"
                    
                  >
                    Automotive
                  </StyledLink>
                </h3>
              </ColumnLeft>
              <ColumnRight>
                <h3>
                  <StyledLink
                    to="/sector/grocery"
                    
                  >
                    Grocery
                  </StyledLink>
                </h3>
              </ColumnRight>
            </MenuRow>
            <MenuRow>
              <ColumnLeft>
                <h3>
                  <StyledLink
                    to="/sector/crypto"
                    
                  >
                    Crypto
                  </StyledLink>
                </h3>
              </ColumnLeft>
              <ColumnRight>
                <h3>
                  <StyledLink
                    to="/sector/social"
                    
                  >
                    Social Media
                  </StyledLink>
                </h3>
              </ColumnRight>
            </MenuRow>
          </SectorMenu>
        </Route>
      </div>
    </>
  );
};

export default MainSectors;
