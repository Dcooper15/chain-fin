import React from "react";

const BidPrice = ({option}) => {
  try {
    return (
        <div className="dataContainer" >
      
       <div className="dataHeader"> Bid</div>
       
        <bold key={4}className="dataComponentData">{
          Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
              (innerArrayID) =>
                option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(
                  2
                )
            );
          })[0][1]
        }{" "}
      </bold>
      </div>
    );
  } catch (error) {
    return <i key={4}>Bid Price: N/A</i>;
  }
};

export default BidPrice;
