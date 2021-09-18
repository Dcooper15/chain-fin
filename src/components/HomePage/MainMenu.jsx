import React from 'react';
import {
    SectorMenu,
    MenuRow,
    ColumnRight,
    ColumnLeft,
    StyledLink,
  } from "../Styles/styledElements";




const MainMenu = () => {
    return(
        <>
        <SectorMenu>
              <MenuRow>
                <ColumnLeft>
                  <h3>
                    <StyledLink to="/sector">Sectors</StyledLink>
                  </h3>
                </ColumnLeft>

                <ColumnRight>
                  <h3>
                    <StyledLink to="/topmovers">Top Movers</StyledLink>
                  </h3>
                </ColumnRight>
              </MenuRow>
            </SectorMenu>
  
        </>

    );
}


export default MainMenu;