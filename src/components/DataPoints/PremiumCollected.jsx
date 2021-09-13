import React from "react";

const PremiumCollected = ({ option }) => {
  try {
    return (
      <div className="dataContainer">
        <div className="dataHeader">Premium</div>
        <i key={5} className="dataComponentData">
          {" "}
          $
          {
            Object.keys(option.callExpDateMap).map((entry) => {
              return Object.keys(option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                  (
                    option.callExpDateMap[entry][innerArrayID][0].bid * 100
                  ).toFixed(2)
              );
            })[0]
          }
        </i>
      </div>
    );
  } catch (error) {
    return <i key={5}>Premium Collected: N/A</i>;
  }
};

export default PremiumCollected;
