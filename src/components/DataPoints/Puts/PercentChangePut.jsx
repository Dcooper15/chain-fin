import React from "react";

const PercentChangePut = ({ option }) => {
  const indexChange = Object.keys(option.putExpDateMap).map((entry) => {
    return Object.keys(option.putExpDateMap[entry]).map(
      (innerArrayID) =>
        option.putExpDateMap[entry][innerArrayID][0].markPercentChange
    );
  })[0][0];
  try {
    return (
      <>
        {indexChange >= 0 ? (
          <i style={{color: "#a4de02"}}key={12} className="dataComponentData">
            {" "}
            +{indexChange}%
          </i>
        ) : (
          <i style={{color: "#ff4c4c"}} key={12} className="dataComponentData">
            {" "}
            {indexChange}%
          </i>
        )}
      </>
    );
  } catch (error) {
    return <i key={12}>N/A</i>;
  }
};

export default PercentChangePut;