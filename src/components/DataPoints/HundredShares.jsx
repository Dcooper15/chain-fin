import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";

const HundredShares = ({ option }) => {
  try {
    return (
      <DataContainer>
        <DataHeader>{"100 Shares"}</DataHeader>
        
        <DataComponent>
          $
           
          {(option.underlyingPrice * 100).toFixed(0)}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    return (
      <DataContainer>
        <DataHeader>Hundred Shares</DataHeader>
        <DataComponent>N/A</DataComponent>
      </DataContainer>
    );
  }
};

export default HundredShares;
