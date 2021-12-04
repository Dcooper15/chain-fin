import React from "react";
import {
  SectorMenuHome,
  MenuRow,
  StyledLink,
  HomeSectorsContainer,
  HomeMoversContainer,
  HomeTrendingContainer,
  HomeEarningsContainer,
  HomeIconContainer
} from "../Styles/styledElements";
import { AiOutlineBank, AiOutlineReddit } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiElectric } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";
import { IoCalendarSharp } from "react-icons/io5";



const MainMenu = () => {
  return (
    <>
      <SectorMenuHome>
        <MenuRow>
          <HomeSectorsContainer>
            <StyledLink to="/sector">Sectors</StyledLink>
            <br></br>
            <HomeIconContainer>
            <AiOutlineBank style={{padding: '1%'}}/><GiCommercialAirplane style={{padding: '1%'}}/>
            <GiElectric style={{padding: '1%'}}/>
            </HomeIconContainer>
            
          </HomeSectorsContainer>

          <HomeMoversContainer>
            <StyledLink to="/topmovers">Movers</StyledLink>
            <HomeIconContainer>
              <FiTrendingUp style={{padding: '1%'}}/>
            </HomeIconContainer>
          </HomeMoversContainer>
        </MenuRow>
        <MenuRow>
          <HomeTrendingContainer>
            <StyledLink to="/trendingwsb">Trending - WSB</StyledLink>
            <HomeIconContainer>
              <AiOutlineReddit style={{padding: '1%'}}/>
            </HomeIconContainer>
          </HomeTrendingContainer>

          <HomeEarningsContainer>
          <StyledLink to="/earnings">Upcoming Earnings</StyledLink>
          
          
          <HomeIconContainer>
              <IoCalendarSharp style={{padding: '1%'}}/>
          </HomeIconContainer>
          </HomeEarningsContainer>
        </MenuRow>
      </SectorMenuHome>
    </>
  );
};

export default MainMenu;
