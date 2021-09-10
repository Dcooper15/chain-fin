import React from "react";

const StockPrice = ({option}) => {
  try {
    return (
      <i key={2}>Share Price: ${option.underlyingPrice.toFixed(2)}</i>
    );
  } catch (error) {
    return <i key={2}>Share Price: N/A</i>;
  }
};

export default StockPrice;
