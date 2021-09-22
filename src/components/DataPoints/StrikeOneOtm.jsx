import React from "react";
import { StrikeHeader } from "../Styles/styledElements";

const StrikeOneOtm = ({ option, mapType }) => {
  const callIndex = Object.keys(option.callExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map(
      (innerArrayID) =>
        option.callExpDateMap[entry][innerArrayID][0].strikePrice
    );
  })[0][1];
  const putIndex = Object.keys(option.putExpDateMap).map((entry) => {
    return Object.keys(option.putExpDateMap[entry]).map(
      (innerArrayID) => option.putExpDateMap[entry][innerArrayID][0].strikePrice
    );
  })[0][0];
  try {
    return (
      <StrikeHeader>
        {mapType === "call" ? callIndex + " Call" : putIndex + " Put"}
      </StrikeHeader>
    );
  } catch (error) {
    <StrikeHeader>N/A</StrikeHeader>;
  }
};

export default StrikeOneOtm;
