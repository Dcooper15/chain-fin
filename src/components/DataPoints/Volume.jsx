import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";

const Volume = ({ option, type }) => {
  try {
    return (
      <DataContainer>
        <DataHeader>Volume</DataHeader>
        <DataComponent>
          {type === "call"
            ? Object.keys(option.callExpDateMap).map((entry) => {
                return Object.keys(option.callExpDateMap[entry]).map(
                  (innerArrayID) =>
                    option.callExpDateMap[entry][innerArrayID][0].totalVolume
                );
              })[0][1]
            : Object.keys(option.putExpDateMap).map((entry) => {
                return Object.keys(option.putExpDateMap[entry]).map(
                  (innerArrayID) =>
                    option.putExpDateMap[entry][innerArrayID][0].totalVolume
                );
              })[0][0]}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    return (
      <DataContainer>
        <DataHeader>Volume</DataHeader>
        <DataComponent>N/A</DataComponent>
      </DataContainer>
    );
  }
};

export default Volume;
