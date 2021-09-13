import React from "react";

const PremiumCollectedPut = ({ option }) => {
  try {
    return (
      <div className="dataContainer">
        <div className="dataHeader">Premium</div>
        <bold key={5} className="dataComponentData">
          {" "}
          $
          {
            Object.keys(option.putExpDateMap).map((entry) => {
              return Object.keys(option.putExpDateMap[entry]).map(
                (innerArrayID) =>
                  (
                    option.putExpDateMap[entry][innerArrayID][0].mark * 100
                  ).toFixed(2)
              );
            })[0]
          }
        </bold>
      </div>
    );
  } catch (error) {
    return <i key={5}>Premium Collected: N/A</i>;
  }
};

export default PremiumCollectedPut;