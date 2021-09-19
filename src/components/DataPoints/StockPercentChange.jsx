import React from "react";
import {
  StyledPercentChangeUp,
  StyledPercentChangeDown,
} from "../Styles/styledElements";

const StockPercentChange = ({ option }) => {
  try {
    return option.underlying.markPercentChange >= 0 ? (
      <StyledPercentChangeUp>
        +{option.underlying.markPercentChange}%
      </StyledPercentChangeUp>
    ) : (
      <StyledPercentChangeDown>
        {option.underlying.markPercentChange}%
      </StyledPercentChangeDown>
    );
  } catch (error) {
    return "no";
  }
};

export default StockPercentChange;
