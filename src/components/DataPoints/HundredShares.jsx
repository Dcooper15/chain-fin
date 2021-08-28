import React from 'react';


const HundredShares = (props) => {
return(
    
    <i key={3}> Cost for 100 shares: $
        {props.option.underlyingPrice.toFixed(2) * 100}
    </i>

    )
};


export default HundredShares;