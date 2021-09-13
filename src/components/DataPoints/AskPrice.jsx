import React from "react";

const AskPrice = ({ option }) => {
  try {
    return (
        <div className="dataContainer" >
      
       <div className="dataHeader"> Ask</div>
       
        <bold key={4}className="dataComponentData">{
          Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
              (innerArrayID) =>
                option.callExpDateMap[entry][innerArrayID][0].ask.toFixed(
                  2
                )
            );
          })[0]
        }{" "}
      </bold>
      </div>
    );
  } catch (error) {
    return <i key={4}>Ask: N/A</i>;
  }
};

export default AskPrice;