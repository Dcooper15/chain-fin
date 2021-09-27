import React from "react";
import {
  StyledCardHeader,
  CardRow,
  StyledPercentChangeUp,
  StyledPercentChangeDown,
  StyledSliderActiveButton,
} from "../Styles/styledElements";
import { BiStats } from "react-icons/bi";

const FullChainCardHeader = ({
  option,
  buttonHandlerActive,
  setStrikeHandler,
  setPremiumHandler,
}) => {
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
        <StyledSliderActiveButton>
          <BiStats
            onClick={() => {
              buttonHandlerActive();
              setStrikeHandler(option.strikePrice);
              setPremiumHandler(option.mark * 100);
            }}
          />
        </StyledSliderActiveButton>
      </CardRow>
    </StyledCardHeader>
  );
};

export default FullChainCardHeader;
