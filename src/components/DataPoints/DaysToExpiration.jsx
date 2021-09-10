import React from "react";

const DaysToExpiration = ({option}) => {
  try {
    return (
      <i key={8}>
        Days to Expiration:{" "}
        {
          Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
              (innerArrayID) =>
                option.callExpDateMap[entry][innerArrayID][0]
                  .daysToExpiration
            );
          })[0]
        }
      </i>
    );
  } catch (error) {
    return <i key={8}>Days to Expiration: N/A</i>;
  }
};

export default DaysToExpiration;
