import React from "react";
import {
  StyledPercentChangeUp,
  StyledPercentChangeDown,
} from "../Styles/styledElements";

const PercentChange = ({ option, mapType }) => {
  const callIndex = Object.keys(option.callExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map(
      (innerArrayID) =>
        option.callExpDateMap[entry][innerArrayID][0].markPercentChange
    );
  })[0][1];
  const putIndex = Object.keys(option.putExpDateMap).map((entry) => {
    return Object.keys(option.putExpDateMap[entry]).map(
      (innerArrayID) =>
        option.putExpDateMap[entry][innerArrayID][0].markPercentChange
    );
  })[0][0];
  const indexChange = mapType === "call" ? callIndex : putIndex;

  try {
    return (
      <>
        {indexChange >= 0 ? (
          <StyledPercentChangeUp> +{indexChange}%</StyledPercentChangeUp>
        ) : (
          <StyledPercentChangeDown> {indexChange}%</StyledPercentChangeDown>
        )}
      </>
    );
  } catch (error) {
    return "";
  }
};

export default PercentChange;
