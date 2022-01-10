import React from "react";
import {
  StyledPercentChangeUp,
  StyledPercentChangeDown,
} from "../Styles/styledElements";
import {callIndex, putIndex} from "../Globals/globalFunctions";

const PercentChange = ({ option, mapType }) => {
  var prop = "markPercentChange";

  const indexChange =
    mapType === "call" ? callIndex(option, prop, 2, 1) : putIndex(option, prop, 2, 1);

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
