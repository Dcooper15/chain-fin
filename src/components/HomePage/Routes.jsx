import React from "react";
import { StyledNavLink, StyledBackLink } from "../Styles/styledElements";
import {
  Route,
  //useHistory
} from "react-router-dom";
import MainTopMovers from "../TopMovers/MainTopMovers";
import MoverStocks from "../TopMovers/MoverStocks";
import FullOptionChain from "../OptionChain/FullOptionChain";
import MainSectors from "../Sectors/MainSectors";
import SectorStocks from "../Sectors/SectorStocks";
import TrendingWsb from "../WSB/TrendingWsb";
import Earnings from "../Earnings/Earnings";
import SearchForm from "../Research/SearchForm";
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

      <Route exact path="/trendingwsb">
        <br></br>
        <StyledBackLink to="/">{<BiArrowBack />}</StyledBackLink>

        <TrendingWsb />
      </Route>

      <Route path="/topmovers/:market">
        <br></br>
        <StyledBackLink to="/topmovers">{<BiArrowBack />}</StyledBackLink>

        <MoverStocks />
      </Route>

      <Route path="/chain/:symbol">
        <br></br>
        <StyledNavLink to="/sector">{"Sectors"}</StyledNavLink>
        <br></br>
        <StyledNavLink to="/topmovers">{"Top Movers"}</StyledNavLink>
        <br></br>
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
        <SearchForm />
      </Route>
    </>
  );
};

export default Routes;
