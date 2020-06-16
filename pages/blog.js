import React from 'react';
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

  const displayBoxArticles = () => {
    let list = [];
    for (let index = 0; index < 20; index++) {
      const boxArticle = (
        <BoxArticle key={index} none={(index > 4)} />
      );
      list.push(boxArticle);
    }

    return list;
  }

  const displayNextBoxArticles = () => {
    document.querySelectorAll(`.boxArticle`).forEach((elem) => {
      elem.classList.remove("none");
    });
  }

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
        <section className="articlesBlock">
          <div className="articlesBlock__articles">
            <h4 className="articlesBlock__articles__titleSection">Récents</h4>
            <div className="articles__list">
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
            </div>
          </div>
          <div className="articlesBlock__boxes">
            <Box>
              {displayBoxArticles()}
              <Button size="medium" onClick={displayNextBoxArticles}>Afficher la suite</Button>
            </Box>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;