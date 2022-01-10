import React from "react";
import {
  DataGreekContainer,
  DataGreekHeader,
  GreekDataComponent,
} from "../Styles/styledElements";
import { callIndexUnfixed, putIndexUnfixed } from "../Globals/globalFunctions";

const GreekDataValue = ({ option, mapType, objectValue, header }) => {
  const prop = objectValue;

  try {
    return (
      <DataGreekContainer>
        <DataGreekHeader>{header}</DataGreekHeader>

        <GreekDataComponent>
          {mapType === "call"
            ? callIndexUnfixed(option, prop)
            : putIndexUnfixed(option, prop)}
        </GreekDataComponent>
      </DataGreekContainer>
    );
  } catch (error) {
    <DataGreekContainer>
      <DataGreekHeader>{header}</DataGreekHeader>

      <GreekDataComponent>N/A</GreekDataComponent>
    </DataGreekContainer>;
  }
};

export default GreekDataValue;