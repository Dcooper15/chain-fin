import React from "react";

const NameOptionChain = ({ namesRender } ) => {
  const nameIncludes =
    namesRender[0][namesRender[0].indexOf("symbol") + 3];
  try {
    if (nameIncludes.includes(",")) {
      return (
        <i key={1}>
          <strong>{nameIncludes.slice(0, nameIncludes.indexOf(","))}</strong>
        </i>
      );
    } else if (nameIncludes.includes("-")) {
      return (
        <i key={1}>
          <strong>{nameIncludes.slice(0, nameIncludes.indexOf("-"))}</strong>
        </i>
      );
    } else if (nameIncludes.includes("(")) {
      return (
        <i key={1}>
          <strong>{nameIncludes.slice(0, nameIncludes.indexOf("("))}</strong>
        </i>
      );
    } else if (nameIncludes.includes("Common")) {
      return (
        <i key={1}>
          <strong>
            {nameIncludes.slice(0, nameIncludes.indexOf("Common"))}
          </strong>
        </i>
      );
    } 
    else if (nameIncludes.includes("Corporation")) {
      return (
        <i key={1}>
          <strong>
            {nameIncludes.slice(0, nameIncludes.indexOf("Corporation"))}
          </strong>
        </i>
      );
    } 
    else if (nameIncludes.includes("Depositary")) {
      return (
        <i key={1}>
          <strong>
            {nameIncludes.slice(0, nameIncludes.indexOf("Depositary"))}
          </strong>
        </i>
      );
    } 
    else {
      return (
        <i key={1}>
          <strong>{nameIncludes}</strong>
        </i>
      );
    }
  } catch (error) {
    return <strong>Name Not Available</strong>;
  }
};

export default NameOptionChain;