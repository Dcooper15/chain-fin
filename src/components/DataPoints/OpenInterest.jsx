import React from 'react';


const OpenInterest = (props) => {
    return(
        <i key={6}>Open Interest:{' '}
            {Object.keys(props.option.callExpDateMap).map((entry) => {
            return Object.keys(props.option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            props.option.callExpDateMap[entry][innerArrayID][0].openInterest
            );
            })}
        </i>
    );
};


export default OpenInterest;