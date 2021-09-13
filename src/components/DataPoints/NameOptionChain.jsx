import React from "react";

const NameOptionChain = ({ namesRender } ) => {
  const nameIncludes =
    namesRender[0][namesRender[0].indexOf("symbol") + 3];
  try {
    if (nameIncludes.includes(",")) {
      return (
        <bold key={1}>
          <strong>{nameIncludes.slice(0, nameIncludes.indexOf(","))}</strong>
        </bold>
      );
    } else if (nameIncludes.includes("-")) {
      return (
        <bold key={1}>
          <strong>{nameIncludes.slice(0, nameIncludes.indexOf("-"))}</strong>
        </bold>
      );
    } else if (nameIncludes.includes("(")) {
      return (
        <bold key={1}>
          <strong>{nameIncludes.slice(0, nameIncludes.indexOf("("))}</strong>
        </bold>
      );
    } else if (nameIncludes.includes("Common")) {
      return (
        <bold key={1}>
          <strong>
            {nameIncludes.slice(0, nameIncludes.indexOf("Common"))}
          </strong>
        </bold>
      );
    } 
    else if (nameIncludes.includes("Corporation")) {
      return (
        <bold key={1}>
          <strong>
            {nameIncludes.slice(0, nameIncludes.indexOf("Corporation"))}
          </strong>
        </bold>
      );
    } 
    else if (nameIncludes.includes("Depositary")) {
      return (
        <bold key={1}>
          <strong>
            {nameIncludes.slice(0, nameIncludes.indexOf("Depositary"))}
          </strong>
        </bold>
      );
    } 
    else {
      return (
        <bold key={1}>
          <strong>{nameIncludes}</strong>
        </bold>
      );
    }
  } catch (error) {
    return <strong>Name Not Available</strong>;
  }
};

export default NameOptionChain;