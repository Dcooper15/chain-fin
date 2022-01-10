import React from "react";
import { StrikeHeader } from "../Styles/styledElements";
import { callIndexUnfixed, putIndexUnfixed } from "../Globals/globalFunctions";

const StrikeOneOtm = ({ option, mapType }) => {
  const prop = "strikePrice";
  try {
    return (
      <StrikeHeader>
        {mapType === "call"
          ? callIndexUnfixed(option, prop) + " Call"
          : putIndexUnfixed(option, prop) + " Put"}
      </StrikeHeader>
    );
  } catch (error) {
    <StrikeHeader>N/A</StrikeHeader>;
  }
};

export default StrikeOneOtm;
