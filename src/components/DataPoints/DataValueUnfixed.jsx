import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";
import {callIndexUnfixed, putIndexUnfixed} from "../Globals/globalFunctions";

const DataValueUnfixed = ({ option, mapType, objectValue, header }) => {
  var prop = objectValue;
  try {
    return (
      <DataContainer>
        <DataHeader>{header}</DataHeader>

        <DataComponent>
        {mapType === "call"
            ? callIndexUnfixed(option, prop)
            : putIndexUnfixed(option, prop)}
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

export default DataValueUnfixed;