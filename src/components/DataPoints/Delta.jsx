import React from "react";

const Delta = ({ option }) => {
  try {
    return (
      <div className="dataGreekContainer">
        <bold className="dataGreekHeader">Delta</bold>
        <i className="dataGreekComponentData">
          {" "}
          {
            Object.keys(option.callExpDateMap).map((entry) => {
              return Object.keys(option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.callExpDateMap[entry][innerArrayID][0].delta.toFixed(4)
              );
            })[0][1]
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

export default Delta;
