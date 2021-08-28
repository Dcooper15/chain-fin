import React from 'react';


const PremiumCollected = (props) => {
    return(
        <i key={5}>Premium collected: $
            {Object.keys(props.option.callExpDateMap).map((entry) => {
                return Object.keys(props.option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                props.option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(
                2) * 100
                );
            })}
        </i>
    );
};

export default PremiumCollected;