import React from 'react';


const PercentChange = ({option}) => {
    try {
    return(
       
        
         <i key={12}className="dataComponentData">Change{" "}{Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].percentChange
            );
            })[0]}
        </i>
   
    );
    } catch (error) {
        return <i key={12}>N/A</i>
    }
};


export default PercentChange;