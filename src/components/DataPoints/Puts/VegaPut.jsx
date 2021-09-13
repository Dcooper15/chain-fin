import React from "react";

const VegaPut = ({ option }) => {
  try {
    return (
      <div className="dataGreekContainer">
        <i className="dataGreekHeader">Vega</i>
        <i className="dataGreekComponentData">
          {" "}
          {
            Object.keys(option.putExpDateMap).map((entry) => {
              return Object.keys(option.putExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.putExpDateMap[entry][innerArrayID][0].vega.toFixed(4)
              );
            })[0]
          }
        </i>
      </div>
    );
  } catch (error) {
    return (
      <div className="dataGreekContainer">
        <i className="dataGreekHeader">Vega</i>
        <i className="dataGreekComponentData">N/A</i>
      </div>
    );
  }
};

export default VegaPut;