import React from "react";
import {
  DataGreekContainer,
  DataGreekHeader,
  GreekDataComponent,
} from "../Styles/styledElements";

const Vega = ({ option, mapType }) => {
  const callIndex = Object.keys(option.callExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map(
      (innerArrayID) => option.callExpDateMap[entry][innerArrayID][0].vega
    );
  })[0][1];
  const putIndex = Object.keys(option.putExpDateMap).map((entry) => {
    return Object.keys(option.putExpDateMap[entry]).map(
      (innerArrayID) => option.putExpDateMap[entry][innerArrayID][0].vega
    );
  })[0][0];
  try {
    return (
      <DataGreekContainer>
        <DataGreekHeader>Vega</DataGreekHeader>

        <GreekDataComponent>
          {mapType === "call" ? callIndex : putIndex}
        </GreekDataComponent>
      </DataGreekContainer>
    );
  } catch (error) {
    <DataGreekContainer>
      <DataGreekHeader>Vega</DataGreekHeader>

      <GreekDataComponent>N/A</GreekDataComponent>
    </DataGreekContainer>;
  }
};

export default Vega;
