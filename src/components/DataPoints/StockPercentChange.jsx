import React from "react";
import {
  StyledPercentChangeUp,
  StyledPercentChangeDown,
} from "../Styles/styledElements";

const StockPercentChange = ({ option, chainPercent, type }) => {
  const percentChange = type === 'full' ? chainPercent : (option.underlying.markPercentChange).toFixed(2)

  try {
    return percentChange >= 0 ? (
      <StyledPercentChangeUp>
        +{percentChange}%
      </StyledPercentChangeUp>
    ) : (
      <StyledPercentChangeDown>
        {percentChange}%
      </StyledPercentChangeDown>
    );
  } catch (error) {
    return "";
  }
};

export default StockPercentChange;
