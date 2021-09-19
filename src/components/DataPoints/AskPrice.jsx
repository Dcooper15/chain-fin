import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";

const AskPrice = ({ option, type }) => {
  try {
    return (
      <DataContainer>
        <DataHeader>Ask</DataHeader>

        <DataComponent>
          {type === "call"
            ? Object.keys(option.callExpDateMap).map((entry) => {
                return Object.keys(option.callExpDateMap[entry]).map(
                  (innerArrayID) =>
                    option.callExpDateMap[entry][innerArrayID][0].ask.toFixed(2)
                );
              })[0][1]
            : Object.keys(option.putExpDateMap).map((entry) => {
                return Object.keys(option.putExpDateMap[entry]).map(
                  (innerArrayID) =>
                    option.putExpDateMap[entry][innerArrayID][0].ask.toFixed(2)
                );
              })[0][0]}{" "}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    <DataContainer>
      <DataHeader>Ask</DataHeader>

      <DataComponent>N/A</DataComponent>
    </DataContainer>;
  }
};

export default AskPrice;
