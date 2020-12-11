import React, { useState } from 'react';
import BoxArticle from '../articles/BoxArticle';
import "./Box.scss";
import Button from '../buttons/Button';

const Box = (props) => {
  let nextArticlesDisplayed = false;
  const [link, setLink] = useState(null);

  const displayBoxArticles = () => {
    let list = [];
    for (let index = 0; index < 20; index++) {
      const boxArticle = (
        <BoxArticle key={index} none={(index > 4)} />
      );
      list.push(boxArticle);
    }

    return list;
  };

  const displayNextBoxArticles = () => {
    if (!nextArticlesDisplayed) {
      document.querySelectorAll(`.boxArticle`).forEach((elem) => {
        elem.classList.remove("none");
      });
      setLink("/news?page=2");
      nextArticlesDisplayed = true;
    }
  };

  return (
    <div className="box">
      <h6 className="box__title">Toute l’info en continu</h6>
      {displayBoxArticles()}
      <Button size="medium" onClick={displayNextBoxArticles} href={link}>Afficher la suite</Button>
    </div>
  );
};

export default Box;