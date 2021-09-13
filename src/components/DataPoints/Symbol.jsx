import React from "react";

const Symbol = ({option}) => {
  try {
    return (
      <bold key={1} style={{fontSize: "20px"}}>
        <strong>{option.symbol}</strong>
      </bold>
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
