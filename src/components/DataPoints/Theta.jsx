import React from "react";

const Theta = ({ option }) => {
  try {
    return (
      <div className="dataGreekContainer">
        <bold className="dataGreekHeader">Theta</bold>
        <i className="dataGreekComponentData">
          {" "}
          {
            Object.keys(option.callExpDateMap).map((entry) => {
              return Object.keys(option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.callExpDateMap[entry][innerArrayID][0].theta.toFixed(4)
              );
            })[0]
          }
        </i>
      </div>
    );
  } catch (error) {
    return (
      <div className="dataGreekContainer">
        <i className="dataGreekHeader">Theta</i>
        <i className="dataGreekComponentData">N/A</i>
      </div>
    );
  }
};

export default Theta;