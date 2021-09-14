import React from "react";

const GammaPut = ({ option }) => {
  try {
    return (
      <div className="dataGreekContainer">
        <bold className="dataGreekHeader">Gamma</bold>
        <i className="dataGreekComponentData">
          {" "}
          {
            Object.keys(option.putExpDateMap).map((entry) => {
              return Object.keys(option.putExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.putExpDateMap[entry][innerArrayID][0].gamma.toFixed(4)
              );
            })[0][0]
          }
        </i>
      </div>
    );
  } catch (error) {
    return (
      <div className="dataGreekContainer">
        <i className="dataGreekHeader">Gamma</i>
        <i className="dataGreekComponentData">N/A</i>
      </div>
    );
  }
};

export default GammaPut;