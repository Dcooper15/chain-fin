import React from 'react';


const PremiumCollected = ({option}) => {
    try {
    return(
        <i key={5}>Premium collected: $
            {Object.keys(option.callExpDateMap).map((entry) => {
                return Object.keys(option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(
                2) * 100
                );
            })[0]}
        </i>
    );
    } catch (error) {
        return <i key={5}>Premium Collected: N/A</i>
    }
};

export default PremiumCollected;