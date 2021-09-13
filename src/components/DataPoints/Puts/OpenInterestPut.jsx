import React from 'react';


const OpenInterestPut = ({option}) => {
    try {
    return(
        <div className="dataContainer" >
        <div className="dataHeader">Open Interest</div>
         <bold key={6}className="dataComponentData">{Object.keys(option.putExpDateMap).map((entry) => {
            return Object.keys(option.putExpDateMap[entry]).map(
            (innerArrayID) =>
            option.putExpDateMap[entry][innerArrayID][0].openInterest
            );
            })[0]}
        </bold>
        </div>
    );
    } catch (error) {
        return <i key={6}>Open Interest: N/A</i>
    }
};


export default OpenInterestPut;