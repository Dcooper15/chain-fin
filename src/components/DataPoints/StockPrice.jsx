import React from "react";

const StockPrice = ({option, chainPrice, type}) => {
  const price = type === 'full' ? chainPrice : option.underlyingPrice.toFixed(2)
  try {
    return (
      <>${price}</>
    );
  } catch (error) {
    return <i key={2}>Share Price: N/A</i>;
  }
};

export default StockPrice;
