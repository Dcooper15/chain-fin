import React from "react";

const DaysToExpiration = ({option}) => {
  try {
    return (
        <div className="dataContainer" >
      <div className="dataHeader">
        Days/Expiration</div>
       <i key={8}className="dataComponentData"> {
          Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
              (innerArrayID) =>
                option.callExpDateMap[entry][innerArrayID][0]
                  .daysToExpiration
            );
          })[0]
        }
     </i>
      </div>
    );
  } catch (error) {
    return <i className="dataContainer" key={8}>Days to Expiration: N/A</i>;
  }
};

export default DaysToExpiration;
