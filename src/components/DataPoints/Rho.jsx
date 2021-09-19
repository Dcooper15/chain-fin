import React from "react";
import { DataGreekContainer, DataGreekHeader, GreekDataComponent} from '../Styles/styledElements';

const Rho = ({ option }) => {
  const key = Object.keys(option.callExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map(
      (innerArrayID) =>
        option.callExpDateMap[entry][innerArrayID][0].rho.toFixed(4)
    );
  })[0][1]
  try {
    return (
      <DataGreekContainer >
        <DataGreekHeader>Rho</DataGreekHeader>
        <GreekDataComponent>
          {" "}
          {
            key
          }
        </GreekDataComponent>
      </DataGreekContainer>
    );
  } catch (error) {
    return (
      <DataGreekContainer>
        <DataGreekHeader>Rho</DataGreekHeader>
        <GreekDataComponent>N/A</GreekDataComponent>
      </DataGreekContainer>
    );
  }
};

export default Rho;