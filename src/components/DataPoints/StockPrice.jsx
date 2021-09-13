import React from "react";

const StockPrice = ({option}) => {
  try {
    return (
      <bold key={2} style={{fontSize: "16px"}}><strong>${option.underlyingPrice.toFixed(2)}</strong></bold>
    );
  } catch (error) {
    return <i key={2}>Share Price: N/A</i>;
  }
};

export default StockPrice;
