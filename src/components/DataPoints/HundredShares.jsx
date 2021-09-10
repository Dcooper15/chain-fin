import React from "react";

const HundredShares = ({option}) => {
  try {
    return (
      <i key={3}>
        {" "}
        Cost for 100 shares: ${option.underlyingPrice.toFixed(2) * 100}
      </i>
    );
  } catch (error) {
    return <i key={3}>Cost for 100 Shares: N/A</i>;
  }
};

export default HundredShares;
