import React from "react";

const Name = (props) => {
  if (
    props.namesRender[0][
      props.namesRender[0].indexOf(props.option.symbol) + 2
    ].includes("-")
  ) {
    return (
      <i key={1}>
        <strong>
          {props.namesRender[0][
            props.namesRender[0].indexOf(props.option.symbol) + 2
          ].slice(
            0,
            props.namesRender[0][
              props.namesRender[0].indexOf(props.option.symbol) + 2
            ].indexOf("-")
          )}
        </strong>
      </i>
    );
  } else if (
    props.namesRender[0][
      props.namesRender[0].indexOf(props.option.symbol) + 2
    ].includes("(")
  ) {
    return (
      <i key={1}>
        <strong>
          {props.namesRender[0][
            props.namesRender[0].indexOf(props.option.symbol) + 2
          ].slice(
            0,
            props.namesRender[0][
              props.namesRender[0].indexOf(props.option.symbol) + 2
            ].indexOf("(")
          )}
        </strong>
      </i>
    );
  } else if (
    props.namesRender[0][
      props.namesRender[0].indexOf(props.option.symbol) + 2
    ].includes("Common")
  ) {
    return (
      <i key={1}>
        <strong>
          {props.namesRender[0][
            props.namesRender[0].indexOf(props.option.symbol) + 2
          ].slice(
            0,
            props.namesRender[0][
              props.namesRender[0].indexOf(props.option.symbol) + 2
            ].indexOf("Common")
          )}
        </strong>
      </i>
    );
  } else {
    return (
      <i key={1}>
        <strong>
          {
            props.namesRender[0][
              props.namesRender[0].indexOf(props.option.symbol) + 2
            ]
          }
        </strong>
      </i>
    );
  }
};

export default Name;
