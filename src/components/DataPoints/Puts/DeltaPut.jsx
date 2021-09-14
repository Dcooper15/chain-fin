import React from "react";

const DeltaPut = ({ option }) => {
  try {
    return (
      <div className="dataGreekContainer">
        <bold className="dataGreekHeader">Delta</bold>
        <i className="dataGreekComponentData">
          {" "}
          {
            Object.keys(option.putExpDateMap).map((entry) => {
              return Object.keys(option.putExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.putExpDateMap[entry][innerArrayID][0].delta.toFixed(4)
              );
            })[0][0]
          }
        </i>
      </div>
    );
  } catch (error) {
    return (
      <div className="dataGreekContainer">
        <i className="dataGreekHeader">Delta</i>
        <i className="dataGreekComponentData">N/A</i>
      </div>
    );
  }
};

export default DeltaPut;