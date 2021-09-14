import React from 'react';


const VolumePut = ({option}) => {
    try {
    return(
        <div className="dataContainer" >
        <div className="dataHeader">Volume</div>
         <i key={6}className="dataComponentData">{Object.keys(option.putExpDateMap).map((entry) => {
            return Object.keys(option.putExpDateMap[entry]).map(
            (innerArrayID) =>
            option.putExpDateMap[entry][innerArrayID][0].totalVolume
            );
            })[0][0]}
        </i>
        </div>
    );
    } catch (error) {
        return <i key={6}>Volume: N/A</i>
    }
};


export default VolumePut;