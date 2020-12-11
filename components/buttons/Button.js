import React, { Fragment } from 'react';
import "./Button.scss";
import cn from "classnames";
import Link from 'next/link';

const Button = (props) => {
  const properties = {
    "button-small": props.size == "small",
    "button-medium": props.size == "medium",
    "button-large": props.size == "large"
  };

  return (
    <Fragment>
      {props.href ?
        <Link href={props.href}>
          <a className={cn("button", properties, props.additionalClass)} onClick={props.onClick}>{props.children}</a>
        </Link>
        :
        <a className={cn("button", properties, props.additionalClass)} onClick={props.onClick}>{props.children}</a>
      }
    </Fragment>
  );
};

export default Button;