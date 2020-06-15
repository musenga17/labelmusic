import React from 'react';
import "./Article.scss";

const Article = () => {
  return (
    <div className="article">
      <img src={require("../../public/images/gallery_test.jpg")} alt="" className="article__img"/>
      <div className="article__infos">
        <h6 className="article__infos__category">SNEAKERS</h6>
        <h4 className="article__infos__title">Donovan Mitchell flipperait pour son contrat max…</h4>
        <p className="article__infos__description">Il faudra encore un peu patienter pour voir le documentaire sur l'une des plus grandes légendes NBA, Magic Johnson</p>
        <p className="article__infos__date">Le 15 juin 2020 à 17:53</p>
      </div>
    </div>
  );
};

export default Article;