import React from 'react';


const StockPrice = (props) => {
   return(
      
    <i key={2}>Stock Price:{" "}
        ${props.option.underlyingPrice.toFixed(2)}
    </i>
   
   ) 
};


export default StockPrice;