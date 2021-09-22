import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";

const DaysToExpiration = ({ option, mapType }) => {
  const callIndex = Object.keys(option.callExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map(
      (innerArrayID) =>
        option.callExpDateMap[entry][innerArrayID][0].daysToExpiration
    );
  })[0][1];
  const putIndex = Object.keys(option.putExpDateMap).map((entry) => {
    return Object.keys(option.putExpDateMap[entry]).map(
      (innerArrayID) =>
        option.putExpDateMap[entry][innerArrayID][0].daysToExpiration
    );
  })[0][0];
  try {
    return (
      <DataContainer>
        <DataHeader>Days/Exp</DataHeader>

        <DataComponent>
          {mapType === "call" ? callIndex : putIndex}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    <DataContainer>
      <DataHeader>Days/Exp</DataHeader>

      <DataComponent>N/A</DataComponent>
    </DataContainer>;
  }
};

export default DaysToExpiration;
