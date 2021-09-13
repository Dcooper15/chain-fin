import React from "react";

const Volatility = ({option}) => {
  try {
    return (
      <div className="dataContainer">
       <div className="dataHeader">Volatility</div>
       <i className="dataComponentData"> {
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
      </div>
    );
  } catch (error) {
    return <i className="dataContainer" key={7}>Volatility N/A</i>;
  }
};

export default Volatility;
