import React from "react";
import {
  DataGreekContainer,
  DataGreekHeader,
  GreekDataComponent,
} from "../Styles/styledElements";

const Rho = ({ option, mapType, chainType }) => {
  const callIndex = Object.keys(option.callExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map(
      (innerArrayID) => option.callExpDateMap[entry][innerArrayID][0].rho
    );
  })[0][1];
  const putIndex = Object.keys(option.putExpDateMap).map((entry) => {
    return Object.keys(option.putExpDateMap[entry]).map(
      (innerArrayID) => option.putExpDateMap[entry][innerArrayID][0].rho
    );
  })[0][0];
  try {
    return (
      <DataGreekContainer>
        <DataGreekHeader>Rho</DataGreekHeader>

        <GreekDataComponent>
          {mapType === "call" ? callIndex : putIndex}
        </GreekDataComponent>
      </DataGreekContainer>
    );
  } catch (error) {
    <DataGreekContainer>
      <DataGreekHeader>Rho</DataGreekHeader>

      <GreekDataComponent>N/A</GreekDataComponent>
    </DataGreekContainer>;
  }
};

export default Rho;
