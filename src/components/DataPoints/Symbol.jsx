import React from "react";

const Symbol = ({option}) => {
  try {
    return (
      <strong key={1} style={{fontSize: "20px"}}>
        <strong>{option.symbol}</strong>
      </strong>
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
