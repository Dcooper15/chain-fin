import React from 'react';


const OpenInterest = ({option}) => {
    try {
    return(
        <div className="dataContainer" >
        <div className="dataHeader">Open Interest</div>
         <bold key={6}className="dataComponentData">{Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].openInterest
            );
            })[0][1]}
        </bold>
        </div>
    );
    } catch (error) {
        return <i key={6}>Open Interest: N/A</i>
    }
};


export default OpenInterest;