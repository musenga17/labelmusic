import React, { useState } from 'react';
import Navbar from '../components/navbars/Navbar';
import MainArticle from '../components/articles/MainArticle';
import Article from '../components/articles/Article';
import Box from '../components/boxes/Box';
import BoxArticle from '../components/articles/BoxArticle';
import Button from '../components/buttons/Button';
import cn from "classnames";

function Blog(props) {
  const displayOtherMainArticles = () => {
    let list = [];
    for (let index = 0; index < 4; index++) {
      const mainArticle = (
        <MainArticle key={index} index={index + 1} />
      );
      list.push(mainArticle);
    }

    return list;
  };

  return (
    <div className="blog">
      <Navbar />
      <div className="container">
        <div className="mainArticlesBlock">
          <div className="col-desk-6">
            <MainArticle index={0} frontpage={true} />
          </div>
          <div className="otherMainArticles col-desk-6">
            {displayOtherMainArticles()}
          </div>
        </div>
        <section className="block">
          <div className="block__content">
            <div className="articles">
              <h4 className="articles__titleSection">Récents</h4>
              <div className="articles__list">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
              </div>
              <Button size="medium" additionalClass="moreArticles" href="/news?page=2">Plus d'articles</Button>
            </div>
          </div>
          <div className="block__boxes">
            <Box />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;