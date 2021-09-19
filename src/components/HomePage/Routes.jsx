import React from "react";
import { StyledNavLink } from '../Styles/styledElements';
import { Route } from "react-router-dom";
//import Navbar from '../Navbar/Navbar';
import MainTopMovers from '../TopMovers/MainTopMovers'
import MoverStocks from '../TopMovers/MoverStocks'
import FullOptionChain from  '../OptionChain/FullOptionChain';
import MainSectors from '../Sectors/MainSectors';
import SectorStocks from '../Sectors/SectorStocks';


const Routes = () => {
    
  return (
    <>
      <Route exact path="/sector">
     
        <StyledNavLink to="/">{"< Home"}</StyledNavLink>
        <MainSectors />
      </Route>

      <Route exact path="/topmovers">
      
        <StyledNavLink to="/">{"< Home"}</StyledNavLink>
        <MainTopMovers />
      </Route>

      <Route path="/topmovers/:market">
      
        <StyledNavLink to="/topmovers">{"< Top Movers"}</StyledNavLink>
        <MoverStocks />
      </Route>

      <Route path="/chain/:symbol">
    
        <StyledNavLink to="/">{"Home"}</StyledNavLink>
        <br></br>
        <StyledNavLink to="/sector">{"Sectors"}</StyledNavLink>
        <br></br>
        <StyledNavLink to="/topmovers">{"Top Movers"}</StyledNavLink>
        <br></br>
        <FullOptionChain />
      </Route>
      <Route path="/sector/:sector">
   
        <StyledNavLink to="/sector">{"< Sectors"}</StyledNavLink>
        <SectorStocks  />
      </Route>
    </>
  );
};

export default Routes;
