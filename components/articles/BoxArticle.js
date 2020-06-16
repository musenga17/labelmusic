import React from 'react';
import cn from "classnames";
import "./BoxArticle.scss";

const BoxArticle = (props) => {
  return (
    <div className={cn("boxArticle", { "none": props.none })}>
      <img src={require("../../public/images/box_article.jpg")} alt="" className="boxArticle__img" />
      <div className="boxArticle__infos">
        <p className="boxArticle__infos__time">19:08</p>
        <p className="boxArticle__infos__title">Ed Davis répond à Kyrie Irving et Dwight Howard</p>
      </div>
    </div>
  );
};

export default BoxArticle;