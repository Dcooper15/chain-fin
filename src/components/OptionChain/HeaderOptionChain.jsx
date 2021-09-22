import React from "react";
import {
  OptionHeaderContainer,
  OptionCName,
  OptionCSub,
} from "../Styles/styledElements";
import Name from "../DataPoints/Name";
import StockPrice from "../DataPoints/StockPrice";
import StockPercentChange from "../DataPoints/StockPercentChange";

const HeaderOptionChain = ({ nameRender, chainPrice, chainPercent }) => {
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
      
    </OptionHeaderContainer>
  );
};

export default HeaderOptionChain;
