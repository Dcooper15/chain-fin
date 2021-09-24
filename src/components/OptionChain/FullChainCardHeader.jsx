import React from "react";
import {
  StyledCardHeader,
  CardRow,
  StyledPercentChangeUp,
  StyledPercentChangeDown,
  StyledInTheMoney
} from "../Styles/styledElements";

const FullChainCardHeader = ({ option }) => {
  return (
    <StyledCardHeader>
      <CardRow>
        <strong>
          {option.description.includes("(")
            ? option.description.slice(0, option.description.indexOf("("))
            : option.description}
        </strong>

        <></>

        {option.markPercentChange >= 0 ? (
          <StyledPercentChangeUp>
            +{option.markPercentChange}%
          </StyledPercentChangeUp>
        ) : (
          <StyledPercentChangeDown>
            {option.markPercentChange}%
          </StyledPercentChangeDown>
          
        )}
        <StyledInTheMoney>
        {option.inTheMoney === true ? 'ITM' : 'OTM'}
        </StyledInTheMoney>
      </CardRow>
    </StyledCardHeader>
  );
};

export default FullChainCardHeader;
