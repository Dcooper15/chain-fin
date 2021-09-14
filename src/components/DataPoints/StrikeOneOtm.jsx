import React from "react";

const StrikeOneOtm = ({ option }) => {
  try {
    return (
      <strong>
        <bold key={11} className="dataComponentData">
          $
          {
            Object.keys(option.callExpDateMap).map((entry) => {
              return Object.keys(option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.callExpDateMap[entry][innerArrayID][0].strikePrice
              );
            })[0][1]
          }{" "}
          Call
        </bold>
      </strong>
    );
  } catch (error) {
    return <i key={6}>Strike: N/A</i>;
  }
};

export default StrikeOneOtm;
