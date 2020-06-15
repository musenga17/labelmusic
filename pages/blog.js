import React from 'react';
import Navbar from '../components/navbars/Navbar';
import MainArticle from '../components/articles/MainArticle';
import Article from '../components/articles/Article';

function Blog(props) {
  const displayOtherMainArticles = () => {
    let list = [];
    for (let index = 0; index < 4; index++) {
      const mainArticle = (
        <MainArticle index={index + 1} />
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
          
        </section>
      </div>
    </div>
  );
}

export default Blog;