import React from "react";

const StrikeOneOtmPut = ({ option }) => {
  try {
    return (
      <strong>
        <bold key={11} className="dataComponentData">
          $
          {
            Object.keys(option.putExpDateMap).map((entry) => {
              return Object.keys(option.putExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.putExpDateMap[entry][innerArrayID][0].strikePrice
              );
            })[0]
          }{" "}
          Put
        </bold>
      </strong>
    );
  } catch (error) {
    return <i key={6}>Strike: N/A</i>;
  }
};

export default StrikeOneOtmPut;