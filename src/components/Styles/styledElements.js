import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectorHeader = styled.h2`
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.headerColor};
  font-size: 20px;
  margin-left: 3%;
  margin-right: 3%;
  
`;

//search
export const StyledSearchHeader = styled.i`
  color: ${(props) => props.theme.headerColor};
  font-size: 15px;
  margin-bottom: 2%;
`;

//full chain header
export const OptionHeaderContainer = styled.div`
  justify-content: left;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: baseline;
  box-sizing: border-box;
  width: 98%;
  margin-bottom: 12px;
`;
export const OptionCName = styled.h4`
  color: ${(props) => props.theme.headerColor};
  margin-left: 2%;
  flex-basis: 100%;
  font-size: 2vh;
  margin-bottom: 0;
`;
export const OptionCSub = styled.strong`
  justify-content: left;
  align-items: left;
  color: ${(props) => props.theme.headerColor};
  font-size: 18px;
  margin-top: 0;
  margin-left: 2%;
  margin-right: 0%;
  margin-bottom: 1%;
`;

export const StyledNavbar = styled.div`
  color: ${(props) => props.theme.accentColor};
  justify-content: left;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: baseline;
`;
export const SectorMenu = styled.div`
  justify-content: right;
  text-align: center;
  display: inline-flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  width: 95%;
  margin-right: 3%;
  margin-left: 3%;
  flex-direction: column;
  align-content: space-between;
`;

export const MenuRow = styled.div`
  flex: 2;
  justify-content: center;
  display: inline-flex;
  padding-right: 1%;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  flex-direction: row;
  align-content: space-between;
`;

export const MenuRowExtra = styled.div`
  flex: 1;
  justify-content: center;
  display: inline-flex;
  align-items: flex-start;
  box-sizing: border-box;
  width: 49%;
  height: 50%;
  flex-direction: row;
  align-content: space-around;
`;

export const ColumnLeft = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-color: ${(props) => props.theme.accentColor};
  border-top-style: groove;
  border-left-style: ridge;
  border-right-style: ridge;
  border-bottom-style: groove;
  border-radius: 2.5vw;
  border-width: 0.3vw;
  margin-top: 2%;
  margin-right: 1%;
  margin-bottom: 1%;
  text-decoration: none;
  font-size: 3.5vw;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: 0.5s ease;
  }
`;
export const SectorMenuHome = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  width: 600px;
  position: relative;
  top: 50%;
  width: 100%;
  margin-left: 0.5%;
  margin-right: 0.5%;
  margin-top: 14vw;
  margin-bottom: 8vw;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
`;

export const ColumnRight = styled.div`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  border-color: ${(props) => props.theme.accentColor};
  border-style: groove;
  border-radius: 2.5vw;
  border-width: 0.3vw;
  margin-top: 2%;
  margin-left: 1%;
  margin-bottom: 1%;
  text-decoration: none;
  font-size: 3.5vw;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: 0.5s ease;
  }
`;

export const ColumnLeftHome = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-color: ${(props) => props.theme.accentColor};
  border-top-style: groove;
  border-left-style: ridge;
  border-right-style: ridge;
  border-bottom-style: groove;
  border-radius: 1.8vw;
  border-width: 0.2vw;
  margin-right: 1%;
  text-decoration: none;
  max-height: 90px;
  height: 100%;
  max-width: 250px;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: 0.5s ease;
  }
`;

export const MenuRowHome = styled.div`
  flex: 2;
  justify-content: center;
  display: inline-flex;
  padding-right: 1%;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 70%;
  flex-direction: row;
  align-content: space-between;
`;

export const StyledMainMenuLink = styled(Link)`
color: ${(props) => props.theme.headerColor};
 flex: 0;
  text-decoration: none;
  margin: 1rem;
  justify-content: center;
  font-size: 5vw;
  max-width: 154px
  position: relative;
  max-height: 33px;

`;
export const ColumnRightHome = styled.div`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  border-color: ${(props) => props.theme.accentColor};
  border-style: groove;
  border-radius: 1.8vw;
  border-width: 0.2vw;
  margin-left: 1%;
  text-decoration: none;
  width: 40%;
  height: 100%;
  max-height: 90px;
  max-width: 255px;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: 0.5s ease;
  }
`;

export const WatchListContainer = styled.div`
display: flex;
width: 60%;
flex-direction: column;
margin-top: 10%;
`

export const StyledWatchListHeader = styled.h4`
flex: 0;
  color: ${(props) => props.theme.headerColor};
  font-size: 3.2vw;
  text-decoration: underline;
  justify-content: left;
  display: inline-flex;
  flex-flow: row;
  flex-basis: 100%;
  align-items: flex-start;
  box-sizing: border-box;
  width: 40%;
  flex-direction: column;

  margin-left: 1%;
`;

export const StyledPlaceHolder = styled.i`
flex: 0;
  color: ${(props) => props.theme.accentColor};
  justify-content: left;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  flex-direction: column;
  font-size: 12px;
  margin-left: 1%;
`;

export const StyledExpDate = styled.i`
color: ${(props) => props.theme.headerColor};
border-style: solid,
border-width: 1px,
`;

export const SupLinks = styled.div`
  text-decoration: none;
  margin-bottom: 2%;
  cursor: pointer;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.headerColor};
  text-decoration: none;
  margin: 1rem;
  font-size: 4vw;
  position: relative;
`;

export const StyledSymbolLink = styled(Link)`
  color: ${(props) => props.theme.headerColor};
  text-decoration: none;
  position: relative;
`;

export const StyledBackLink = styled(Link)`
  color: ${(props) => props.theme.accentColor};
  text-decoration: none;
  position: relative;
  font-size: 3.4vw;
  margin-left: 1%;
`;

export const StyledNavLink  = styled(Link)`
color: ${(props) => props.theme.accentColor};
  text-decoration: none;
  position: relative;
  font-size: 2.4vw;
  margin-left: 1%;
`

const StyledExtLinkButton = styled.button`
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-size: 10px;
`;

export const ExtLink = StyledExtLinkButton.withComponent("a");

export const ButtonDiv = styled.div`
  display: inline-flex;
  margin-left: 2%;
  margin-right: 2%;
  width: 5%;
`;

export const StyledMenuItem = styled.strong`
  color: ${(props) => props.theme.fontColor};
`;

// card data
export const StyledCardHeader = styled.div`
  justify-content: left;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
  box-sizing: border-box;
  width: 98%;
  flex-direction: row;
  border-style: solid;
  border-top: 0px ${(props) => props.theme.accentColor};
  border-left: 0px ${(props) => props.theme.accentColor};
  border-right: ${(props) => props.theme.accentColor};
  border-color: ${(props) => props.theme.accentColor};
  border-width: 1px;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  margin-bottom: 1%;
`;
export const CardRow = styled.div`
  flex: 1;
  justify-content: left;
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;
  align-content: bottom;
  margin-bottom: 0;
`;
export const StyledName = styled.div`
  flex: 0;
  flex-basis: 100%;
  justify-content: left;
  align-items: flex-start;
  flex-direction: row;
  flex-flow: no wrap;
  margin-top: 0;
`;
export const StyledStockPrice = styled.strong`
  flex: 0;
  padding-left: 2%;
  align-items: center;
`;
export const StyledPercentHeader = styled.i`
  flex: 0;
  margin-left: 1%;
  align-items: bottom;
`;
export const StyledOcCollateral = styled.i`
  flex: 0;
  flex-flow: no wrap;
  flex-basis: 100%;
`;
export const StrikeHeader = styled.strong``;

export const DataContainer = styled.div`
  justify-content: right;
  display: inline-flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  width: 55%;
  flex-direction: row;
  align-content: space-between;
  border-style: ridge;
  border-top: 0px ${(props) => props.theme.dataLineColor};
  border-left: 0px ${(props) => props.theme.dataLineColor};
  border-right: ${(props) => props.theme.dataLineColor};
  border-color: ${(props) => props.theme.dataLineColor};
  border-width: thin;
  margin-right: 5%;
`;

export const DataHeader = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const DataComponent = styled.div`
  flex: 0;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;
export const DataGreekContainer = styled.div`
  justify-content: right;
  display: inline-flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  width: 38%;
  flex-direction: row;
  align-content: space-between;
  border-style: ridge;
  border-top: 0px ${(props) => props.theme.dataLineColor};
  border-left: 0px ${(props) => props.theme.dataLineColor};
  border-right: ${(props) => props.theme.dataLineColor};
  border-color: ${(props) => props.theme.dataLineColor};
  border-width: thin;
  align-items: flex-end;
  margin-right: 2%;
`;
export const DataGreekHeader = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const GreekDataComponent = styled.div`
.dataGreekComponentData {
  flex: 0;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  
`;

export const StyledPercentChangeUp = styled.i`
  color: ${(props) => props.theme.percentChangeUp};
  padding-left: 1%;
  margin-left: 1%;
`;

export const StyledPercentChangeDown = styled.i`
  color: ${(props) => props.theme.percentChangeDown};
  padding-left: 1%;
  margin-left: 1%;
`;
