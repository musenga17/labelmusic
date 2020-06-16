import React from 'react';
import "./Button.scss";
import cn from "classnames";

const Button = (props) => {
  const properties = {
    "button-small": props.size == "small",
    "button-medium": props.size == "medium",
    "button-large": props.size == "large"
  };

  return (
    <a className={cn("button", properties, props.additionalClass)} onClick={props.onClick}>{props.children}</a>
  );
};

export default Button;