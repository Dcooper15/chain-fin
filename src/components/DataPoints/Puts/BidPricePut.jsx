import React from "react";

const BidPricePut = ({option}) => {
  try {
    return (
        <div className="dataContainer" >
      
       <div className="dataHeader"> Bid</div>
       
        <bold key={4}className="dataComponentData">{
          Object.keys(option.putExpDateMap).map((entry) => {
            return Object.keys(option.putExpDateMap[entry]).map(
              (innerArrayID) =>
                option.putExpDateMap[entry][innerArrayID][0].bid.toFixed(
                  2
                )
            );
          })[0]
        }{" "}
      </bold>
      </div>
    );
  } catch (error) {
    return <i key={4}>Bid: N/A</i>;
  }
};

export default BidPricePut;