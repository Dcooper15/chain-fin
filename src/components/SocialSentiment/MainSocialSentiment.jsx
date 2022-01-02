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
} from "../Styles/styledElements";

const MainSocialSentiment = () => {
  return (
    <>
      <SectorContainer>
        <Route path="/social">
          <SectorHeader>Tickers Trending on Social Media</SectorHeader>
          <SectorMenu>
            <MenuRow>
              <ColumnLeft>
                <StyledLink to="/social/trendingwsb">Reddit - WSB</StyledLink>
              </ColumnLeft>
              <ColumnRight>
                <StyledLink to="/social/twitterstocktwits">
                  Twitter & Stocktwits
                </StyledLink>
              </ColumnRight>
            </MenuRow>
          </SectorMenu>
        </Route>
      </SectorContainer>
    </>
  );
};

export default MainSocialSentiment;
