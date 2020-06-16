import React from 'react';
import "./Box.scss";

const Box = (props) => {
  return (
    <div className="box">
      <h6 className="box__title">Toute l’info en continu</h6>
      {props.children}
    </div>
  );
};

export default Box;