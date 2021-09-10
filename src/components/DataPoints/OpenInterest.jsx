import React from 'react';


const OpenInterest = ({option}) => {
    try {
    return(
        <i key={6}>Open Interest:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].openInterest
            );
            })[0]}
        </i>
    );
    } catch (error) {
        return <i key={6}>Open Interest: N/A</i>
    }
};


export default OpenInterest;