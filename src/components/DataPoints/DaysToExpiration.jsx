import React from 'react';


const DaysToExpiration = (props) => {
    return (
        <i key={8}>
            Days to Expiration:{' '}
            {Object.keys(props.option.callExpDateMap).map((entry) => {
            return Object.keys(props.option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                props.option.callExpDateMap[entry][innerArrayID][0].daysToExpiration
                );
            })}
        </i>
    );
};


export default DaysToExpiration