import React from "react";
import {
  StyledCardHeader,
  StyledName,
  StyledSymbolLink, StyledStockPrice, CardRow
} from "../Styles/styledElements";
import { Button } from "@material-ui/core";
import Name from "./Name";
import Symbol from "./Symbol";
import StockPrice from "./StockPrice";
import StockPercentChange from "./StockPercentChange";
import { HiLink } from "react-icons/hi";

const MapCardHeader = ({ option }) => {
  return (
    <>
      <StyledCardHeader>
        <CardRow>
        <StyledSymbolLink to={`/chain/${option.symbol}`}>
          <Symbol option={option} />
        </StyledSymbolLink>
        <StyledStockPrice>
        <StockPrice option={option} />
        </StyledStockPrice>
        {/* <StyledPercentHeader> */}
        <StockPercentChange option={option} />
        {/* </StyledPercentHeader> */}
        <Button
          type="submit"
          size="small"
          style={{padding: '0'}}
        >
           <StyledSymbolLink to={`/chain/${option.symbol}`}>
            <HiLink style={{fontSize: '14px'}}/>
            </StyledSymbolLink>
        </Button>
        </CardRow>
        <StyledName>
          <Name namesRender={option.underlying.description} />
        </StyledName>
      </StyledCardHeader>
    </>
  );
};

export default MapCardHeader;
