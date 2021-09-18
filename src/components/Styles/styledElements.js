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
  align-content: space-between;
`;

export const ColumnLeft = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-color: ${(props) => props.theme.headerColor};
  border-top-style: groove;
  border-left-style: ridge;
  border-right-style: ridge;
  border-bottom-style: groove;
  border-radius: 20px;
  border-width: 1px;
  margin-top: 2%;
  margin-right: 1%;
  margin-bottom: 1%;
  text-decoration: none;
`;

export const ColumnRight = styled.div`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  border-color: ${(props) => props.theme.headerColor};
  border-style: groove;
  border-radius: 20px;
  border-width: 1px;
  margin-top: 2%;
  margin-bottom: 1%;
  text-decoration: none;
`;

export const SupLinks = styled.div`
text-decoration: none;
margin-bottom: 2%; 
cursor: pointer;
justify-content: center;

`

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.headerColor};
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;

export const StyledSymbolLink = styled(Link)`
  color: ${(props) => props.theme.headerColor};
  text-decoration: none;
  position: relative;
`;

export const StyledNavLink = styled(Link)`
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  position: relative;

`;

const StyledExtLinkButton = styled.button`
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-size: 10px;
`;

export const ExtLink = StyledExtLinkButton.withComponent('a')
