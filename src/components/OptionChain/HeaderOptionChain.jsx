import React from "react";
import {
  OptionHeaderContainer,
  OptionCName,
  OptionCSub,
  StyledMoreDataButton,
} from "../Styles/styledElements";
import Name from "../DataPoints/Name";
import StockPrice from "../DataPoints/StockPrice";
import StockPercentChange from "../DataPoints/StockPercentChange";
import { GiArmoredBoomerang } from "react-icons/gi";

const HeaderOptionChain = ({ nameRender, chainPrice, chainPercent, buttonHandlerMoreDataActive }) => {
  return (
    <OptionHeaderContainer>
      <OptionCName>
        <Name namesRender={nameRender} type={"full"} />
      </OptionCName>
      <br></br>
      <OptionCSub>
        <StockPrice chainPrice={chainPrice} type={"full"} />
      </OptionCSub>
      <StockPercentChange chainPercent={chainPercent} type={"full"} />
      <StyledMoreDataButton>
        <GiArmoredBoomerang 
        onClick={() => {
          buttonHandlerMoreDataActive();
        }}/>
      </StyledMoreDataButton>
    </OptionHeaderContainer>
  );
};

export default HeaderOptionChain;
