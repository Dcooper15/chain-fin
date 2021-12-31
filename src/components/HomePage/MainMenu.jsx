import React from "react";
import {
  SectorMenuHome,
  MenuRow,
  StyledLink,
  HomeSectorsContainer,
  HomeMoversContainer,
  HomeTrendingContainer,
  HomeEarningsContainer,
  HomeResearchContainer,
  HomeIconContainer,
  HomeDummyContainer,
  HomeIconContainerDisabled,
  StyledLinkDisabled
} from "../Styles/styledElements";
import { AiOutlineBank, AiOutlineReddit, AiOutlineFileSearch, AiOutlineScan } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiElectric } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";
import { IoCalendarSharp } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";




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
            <StyledLink to="/social">Social Media</StyledLink>
            <HomeIconContainer>
              <AiOutlineReddit style={{padding: '1%'}}/>
              <TiSocialTwitter style={{padding: '1%'}}/>
            </HomeIconContainer>
          </HomeTrendingContainer>

          <HomeEarningsContainer>
          <StyledLink to="/earnings">Upcoming Earnings</StyledLink>
          
          
          <HomeIconContainer>
              <IoCalendarSharp style={{padding: '1%'}}/>
          </HomeIconContainer>
          </HomeEarningsContainer>
        </MenuRow>
        <MenuRow>
        <HomeResearchContainer>
            <StyledLink to="/research">Research</StyledLink>
            <HomeIconContainer>
              <AiOutlineFileSearch style={{padding: '1%'}}/>
            </HomeIconContainer>
          </HomeResearchContainer>
          <HomeDummyContainer>
          <StyledLinkDisabled to="/">Scanner</StyledLinkDisabled>
            <HomeIconContainerDisabled>
              <AiOutlineScan style={{padding: '1%'}}/>
            </HomeIconContainerDisabled>
          </HomeDummyContainer>
        </MenuRow>
      </SectorMenuHome>
    </>
  );
};

export default MainMenu;
