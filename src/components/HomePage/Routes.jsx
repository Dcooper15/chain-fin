import React from "react";
import { StyledNavLink } from '../Styles/styledElements';
import { Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import MainTopMovers from '../TopMovers/MainTopMovers'
import MoverStocks from '../TopMovers/MoverStocks'
import FullOptionChain from  '../OptionChain/FullOptionChain';
import MainSectors from '../Sectors/MainSectors';
import SectorStocks from '../Sectors/SectorStocks';


const Routes = () => {
    
  return (
    <div className="Routes">
      <Route exact path="/sector">
        <Navbar />
        <StyledNavLink to="/">{"< Home"}</StyledNavLink>
        <MainSectors />
      </Route>

      <Route exact path="/topmovers">
        <Navbar />
        <StyledNavLink to="/">{"< Home"}</StyledNavLink>
        <MainTopMovers />
      </Route>

      <Route path="/topmovers/:market">
        <Navbar />
        <StyledNavLink to="/topmovers">{"< Top Movers"}</StyledNavLink>
        <MoverStocks />
      </Route>

      <Route path="/chain/:symbol">
        <Navbar />
        <StyledNavLink to="/">{"Home"}</StyledNavLink>
        <br></br>
        <StyledNavLink to="/sector">{"Sectors"}</StyledNavLink>
        <br></br>
        <StyledNavLink to="/topmovers">{"Top Movers"}</StyledNavLink>
        <br></br>
        <FullOptionChain />
      </Route>
      <Route path="/sector/:sector">
        <Navbar />
        <StyledNavLink to="/sector">{"< Sectors"}</StyledNavLink>
        <SectorStocks  />
      </Route>
    </div>
  );
};

export default Routes;
