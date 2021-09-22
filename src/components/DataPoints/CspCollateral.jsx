import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";

const CspCollateral = ({ option, mapType }) => {
    try {
        const callIndex = Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
              (innerArrayID) =>
                option.callExpDateMap[entry][innerArrayID][0].strikePrice
            );
          })[0][1];
          const putIndex = Object.keys(option.putExpDateMap).map((entry) => {
            return Object.keys(option.putExpDateMap[entry]).map(
              (innerArrayID) => option.putExpDateMap[entry][innerArrayID][0].strikePrice
            );
          })[0][0];
    return (
      <DataContainer>
        <DataHeader>{"CSP Collateral"}</DataHeader>
        
        <DataComponent>
          $
           
          {mapType === "call" ? ( callIndex * 100 ) : ( putIndex * 100 )}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    return (
      <DataContainer>
        <DataHeader>CSP Collateral</DataHeader>
        <DataComponent>N/A</DataComponent>
      </DataContainer>
    );
  }
};

export default CspCollateral;