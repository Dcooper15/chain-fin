import React from 'react';


const BidPrice = (props) => {
    // console.log("BID", Object.keys(props.option.callExpDateMap).map((entry) => {
    //     return Object.keys(
    //     props.option.callExpDateMap[entry]
    //     ).map((innerArrayID) =>
    //     props.option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(2)
    //     );
    // }));
    return(
        <i key={4}>
        Bid Price: $
            {Object.keys(props.option.callExpDateMap).map((entry) => {
                return Object.keys(
                props.option.callExpDateMap[entry]
                ).map((innerArrayID) =>
                props.option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(2)
                );
            })[0]}{" "}
        </i>
    )
};


export default BidPrice;