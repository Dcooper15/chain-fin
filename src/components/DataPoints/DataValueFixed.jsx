import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";
import {callIndex, putIndex} from "../Globals/globalFunctions";

const DataValueFixed = ({ option, mapType, objectValue, header, multiplyBy, dollarSign }) => {
  var prop = objectValue;
  try {
    return (
      <DataContainer>
        <DataHeader>{header}</DataHeader>

        <DataComponent>
          {dollarSign}{mapType === "call" ? callIndex(option, prop, 2, multiplyBy) : putIndex(option, prop, 2, multiplyBy)}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    return (
      <DataContainer>
        <DataHeader>{header}</DataHeader>
        <DataComponent>N/A</DataComponent>
      </DataContainer>
    );
  }
};

export default DataValueFixed;