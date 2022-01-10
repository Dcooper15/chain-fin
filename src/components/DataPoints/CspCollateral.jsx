import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";
import {putIndexUnfixed } from "../Globals/globalFunctions";
const CspCollateral = ({ option }) => {
  const prop = "strikePrice";
  try {
    return (
      <DataContainer>
        <DataHeader>{"CSP Collateral"}</DataHeader>

        <DataComponent>
          $
          
            {putIndexUnfixed(option, prop) * 100}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    return (
      <DataContainer>
        <DataHeader>CSP Collateral</DataHeader>
        <DataComponent>N/A</DataComponent>
      </DataContainer>
    );
  }
};

export default CspCollateral;
