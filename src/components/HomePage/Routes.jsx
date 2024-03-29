import React from "react";
import { StyledBackLink } from "../Styles/styledElements";
import {
  Route,
  //useHistory
} from "react-router-dom";
import MainTopMovers from "../TopMovers/MainTopMovers";
import MoverStocks from "../TopMovers/MoverStocks";
import FullOptionChain from "../OptionChain/FullOptionChain";
import MainSectors from "../Sectors/MainSectors";
import SectorStocks from "../Sectors/SectorStocks";
import MainSocialSentiment from "../SocialSentiment/MainSocialSentiment";
import TrendingWsb from "../SocialSentiment/TrendingWsb";
import Earnings from "../Earnings/Earnings";
import MainResearch from "../Research/MainResearch";
import Twit from "../SocialSentiment/Twit";
import { BiArrowBack } from "react-icons/bi";

const Routes = () => {
  // let history = useHistory();

  return (
    <>
      <Route exact path="/sector">
        <br></br>
        <StyledBackLink to="/">{<BiArrowBack />}</StyledBackLink>
        <MainSectors />
      </Route>

      <Route exact path="/topmovers">
        <br></br>
        <StyledBackLink to="/">{<BiArrowBack />}</StyledBackLink>
        <MainTopMovers />
      </Route>
      <Route exact path="/social">
        <br></br>
        <StyledBackLink to="/">{<BiArrowBack />}</StyledBackLink>
        <MainSocialSentiment />
      </Route>

      <Route exact path="/social/trendingwsb">
        <br></br>
        <StyledBackLink to="/social">{<BiArrowBack />}</StyledBackLink>

        <TrendingWsb />
      </Route>

      <Route path="/topmovers/:market">
        <br></br>
        <StyledBackLink to="/topmovers">{<BiArrowBack />}</StyledBackLink>

        <MoverStocks />
      </Route>

      <Route path="/chain/:symbol">
        <FullOptionChain />
      </Route>
      <Route path="/sector/:sector">
        <br></br>
        <StyledBackLink to="/sector">{<BiArrowBack />}</StyledBackLink>

        <SectorStocks />
      </Route>
      <Route exact path="/earnings">
        <Earnings />
      </Route>
      <Route exact path="/research">
        <MainResearch />
      </Route>
      <Route exact path="/social/twitterstocktwits">
        <br></br>
        <StyledBackLink to="/social">{<BiArrowBack />}</StyledBackLink>
        <Twit />
      </Route>
    </>
  );
};

export default Routes;
