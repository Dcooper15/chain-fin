import React from "react";

const Volatility = ({option}) => {
  try {
    return (
      <i key={7}>
        Volatility:{" "}
        {
          Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
              (innerArrayID) =>
                option.callExpDateMap[entry][
                  innerArrayID
                ][0].volatility.toFixed(2)
            );
          })[0]
        }
      </i>
    );
  } catch (error) {
    return <i key={7}>Volatility: N/A</i>;
  }
};

export default Volatility;
