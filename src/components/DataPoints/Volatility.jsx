import React from 'react';


const Volatility = (props) => {
    return(
        <i key={7}>
            Volatility:{' '}
            {Object.keys(props.option.callExpDateMap).map((entry) => {
            return Object.keys(props.option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            props.option.callExpDateMap[entry][innerArrayID][0].volatility.toFixed(2)
  
            );
            })}
        </i>
    );
};


export default Volatility;