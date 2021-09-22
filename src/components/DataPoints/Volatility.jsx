import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";

const Volatility = ({ option, mapType }) => {
  
  try {
    const callIndex = Object.keys(option.callExpDateMap).map((entry) => {
      return Object.keys(option.callExpDateMap[entry]).map((innerArrayID) =>
        option.callExpDateMap[entry][innerArrayID][0].volatility
      );
    })[0][1];
    const putIndex = Object.keys(option.putExpDateMap).map((entry) => {
      return Object.keys(option.putExpDateMap[entry]).map((innerArrayID) =>
        option.putExpDateMap[entry][innerArrayID][0].volatility
      );
    })[0][0];
    return (
      <DataContainer>
        <DataHeader>Implied Volatility</DataHeader>

        <DataComponent>
          {mapType === "call" ? callIndex.toFixed(2) : putIndex.toFixed(2)}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    <DataContainer>
      <DataHeader>Implied Volatility</DataHeader>

      <DataComponent>N/A</DataComponent>
    </DataContainer>;
  }
};

export default Volatility;
