import React from "react";

const DaysToExpirationPut = ({option}) => {
  try {
    return (
        <div className="dataContainer" >
      <div className="dataHeader">
        Days/Expiration</div>
       <bold key={8}className="dataComponentData"> {
          Object.keys(option.putExpDateMap).map((entry) => {
            return Object.keys(option.putExpDateMap[entry]).map(
              (innerArrayID) =>
                option.putExpDateMap[entry][innerArrayID][0]
                  .daysToExpiration
            );
          })[0][0]
        }
     </bold>
      </div>
    );
  } catch (error) {
    return <i className="dataContainer" key={8}>Days to Expiration: N/A</i>;
  }
};

export default DaysToExpirationPut;