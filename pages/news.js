import React from 'react';
import Navbar from '../components/navbars/Navbar';
import Article from '../components/articles/Article';
import Box from '../components/boxes/Box';
import BoxArticle from '../components/articles/BoxArticle';
import Button from '../components/buttons/Button';
import Pagination from '../components/paginations/Pagination';

function News(props) {

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
    <div className="news">
      <Navbar />
      <div className="container">
        <div className="block">
          <div className="block__content">
            <h3 className="title">Actualités</h3>
            <div className="list">
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
            </div>
          </div>
          <div className="block__boxes">
            <Box>
              {displayBoxArticles()}
              <Button size="medium" onClick={displayNextBoxArticles}>Afficher la suite</Button>
            </Box>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default News;