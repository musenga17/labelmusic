import React from 'react';
import "./Pagination.scss";
import Button from '../buttons/Button';

const Pagination = (props) => {
  const displayList = () => {
    let listOfPages = [];
    let list = [];
    for (let index = 1; index < 99; index++) {
      listOfPages.push(index);
    }


  }

  return (
    <nav className="pagination">
      <Button><span className="icon-arrow-left2"></span></Button>
      <div className="pagination__list">

      </div>
      <Button><span className="icon-arrow-right2"></span></Button>
    </nav>
  );
};

export default Pagination;