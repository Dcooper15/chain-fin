import React from "react";

const HundredShares = ({ option }) => {
  try {
    return (
      <div className="dataContainer">
        <div className="dataHeader">{"100 Shares"}</div>
        <></>
        <bold key={3}className="dataComponentData">
          ${(option.underlyingPrice * 100).toFixed(0)}
        </bold>
      </div>
    );
  } catch (error) {
    return <i key={3}>100 Shares: N/A</i>;
  }
};

export default HundredShares;
