import React from "react";

const AskPricePut = ({ option }) => {
  try {
    return (
        <div className="dataContainer" >
      
       <div className="dataHeader"> Ask</div>
       
        <bold key={4}className="dataComponentData">{
          Object.keys(option.putExpDateMap).map((entry) => {
            return Object.keys(option.putExpDateMap[entry]).map(
              (innerArrayID) =>
                option.putExpDateMap[entry][innerArrayID][0].ask.toFixed(
                  2
                )
            );
          })[0][0]
        }{" "}
      </bold>
      </div>
    );
  } catch (error) {
    return <i key={4}>Ask: N/A</i>;
  }
};

export default AskPricePut;