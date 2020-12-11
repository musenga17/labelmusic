import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbars/Navbar';
import Article from '../components/articles/Article';
import Box from '../components/boxes/Box';
import Pagination from '../components/paginations/Pagination';
import queryString from "query-string";

function News(props) {

  const [page, setPage] = useState(2);

  useEffect(() => {
    setPage(parseInt(queryString.parse(location.search)["page"]));
  });

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
            <Pagination currentPage={page} lastPage={800} />
          </div>
          <div className="block__boxes">
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
}

/* News.getInitialProps = async ({ query: { page } }) => {
  return { aboutId: page }
} */

export default News;