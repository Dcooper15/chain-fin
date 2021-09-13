import React from "react";

const RhoPut = ({ option }) => {
  try {
    return (
      <div className="dataGreekContainer">
        <bold className="dataGreekHeader">Rho</bold>
        <i className="dataGreekComponentData">
          {" "}
          {
            Object.keys(option.putExpDateMap).map((entry) => {
              return Object.keys(option.putExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.putExpDateMap[entry][innerArrayID][0].rho.toFixed(4)
              );
            })[0]
          }
        </i>
      </div>
    );
  } catch (error) {
    return (
      <div className="dataGreekContainer">
        <i className="dataGreekHeader">Rho</i>
        <i className="dataGreekComponentData">N/A</i>
      </div>
    );
  }
};

export default RhoPut;