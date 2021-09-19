import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";

const DaysToExpiration = ({ option, type }) => {
  try {
    return (
      <DataContainer>
        <DataHeader>Days/Expiration</DataHeader>
        <DataComponent>
          {
            Object.keys(option.callExpDateMap).map((entry) => {
              return Object.keys(option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.callExpDateMap[entry][innerArrayID][0].daysToExpiration
              );
            })[0][1]
          }
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    return (
      <DataContainer>
        <DataHeader>Days/Expiration</DataHeader>
        <DataComponent>N/A</DataComponent>
      </DataContainer>
    );
  }
}
export default DaysToExpiration;
