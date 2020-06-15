import React from 'react';
import "./MainArticle.scss";
import cn from "classnames";

const MainArticle = (props) => {
  return (
    <div className={cn("mainArticle", `article${props.index}`, { "frontpage": props.frontpage })}>
      <h5 className="mainArticle__title">Allen Iverson, légende du crossover</h5>
    </div>
  );
};

export default MainArticle;