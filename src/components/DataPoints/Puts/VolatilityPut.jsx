import React from "react";

const VolatilityPut = ({option}) => {
  try {
    return (
      <div className="dataContainer">
       <div className="dataHeader">Implied Volatility</div>
       <i className="dataComponentData"> {
          Object.keys(option.putExpDateMap).map((entry) => {
            return Object.keys(option.putExpDateMap[entry]).map(
              (innerArrayID) =>
                option.putExpDateMap[entry][
                  innerArrayID
                ][0].volatility.toFixed(2)
            );
          })[0][0]
        }
        </i>
      </div>
    );
  } catch (error) {
    return <i className="dataContainer" key={7}>Volatility N/A</i>;
  }
};

export default VolatilityPut;