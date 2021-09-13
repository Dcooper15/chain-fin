import React from "react";

const HundredShares = ({ option }) => {
  try {
    return (
      <div className="dataContainer">
        <div className="dataHeader">{"100 Shares"}</div>
        <></>
        <i key={3}className="dataComponentData">
          ${option.underlyingPrice.toFixed(2) * 100}
        </i>
      </div>
    );
  } catch (error) {
    return <i key={3}>100 Shares: N/A</i>;
  }
};

export default HundredShares;
