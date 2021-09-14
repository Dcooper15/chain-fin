import React from 'react';


const Volume = ({option}) => {
    try {
    return(
        <div className="dataContainer" >
        <div className="dataHeader">Volume</div>
         <i key={6}className="dataComponentData">{Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].totalVolume
            );
            })[0][1]}
        </i>
        </div>
    );
    } catch (error) {
        return <i key={6}>Volume: N/A</i>
    }
};


export default Volume;