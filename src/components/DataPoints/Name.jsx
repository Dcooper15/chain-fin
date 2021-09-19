import React from "react";

const Name = ({ namesRender }) => {
  const nameIncludes = namesRender
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

export default Name;
