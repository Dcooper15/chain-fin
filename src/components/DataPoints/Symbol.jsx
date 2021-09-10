import React from "react";

const Symbol = ({option}) => {
  try {
    return (
      <i key={1}>
        <strong>{option.symbol}</strong>
      </i>
    );
  } catch (error) {
    return (
      <i key={1}>
        Symbol Not Available
      </i>
    )
  }
};

export default Symbol;
