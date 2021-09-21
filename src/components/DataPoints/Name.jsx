import React from "react";

const Name = ({ namesRender }) => {
  const nameIncludes = namesRender;
  try {
    if (nameIncludes.includes(",")) {
      return <>{nameIncludes.slice(0, nameIncludes.indexOf(","))}</>;
    } else if (nameIncludes.includes("-")) {
      return <>{nameIncludes.slice(0, nameIncludes.indexOf("-"))}</>;
    } else if (nameIncludes.includes("(")) {
      return <>{nameIncludes.slice(0, nameIncludes.indexOf("("))}</>;
    } else if (nameIncludes.includes("Common")) {
      return <>{nameIncludes.slice(0, nameIncludes.indexOf("Common"))}</>;
    } else if (nameIncludes.includes("Corporation")) {
      return <>{nameIncludes.slice(0, nameIncludes.indexOf("Corporation"))}</>;
    } else if (nameIncludes.includes("Depositary")) {
      return <>{nameIncludes.slice(0, nameIncludes.indexOf("Depositary"))}</>;
    } else {
      return (
        <>
          {nameIncludes}
        </>
      );
    }
  } catch (error) {
    return <>Name Not Available</>;
  }
};

export default Name;
