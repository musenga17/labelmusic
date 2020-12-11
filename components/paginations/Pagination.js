import React, { useState, useEffect } from 'react';
import "./Pagination.scss";
import Button from '../buttons/Button';
import cn from "classnames";
import Link from 'next/link';

const Pagination = (props) => {

  const displayPagination = () => {
    console.log("CP : ", props.currentPage);
    if (props.currentPage == 1) {
      if (props.lastPage < 7) {
        console.log("d0")
        return display0();
      }
      else {
        console.log("d1")
        return display1();
      }
    }
    else if (props.currentPage >= 2 && props.currentPage < 4) {
      console.log("d2")
      return display2();
    }
    else if (props.currentPage >= 4 && props.currentPage < props.lastPage - 2) {
      console.log("d3")
      return display3();
    }
    else if (props.currentPage >= props.lastPage - 2 && props.currentPage < props.lastPage) {
      console.log("d4")
      return display4();
    }
    else if (props.currentPage == props.lastPage) {
      console.log("d5")
      return display5();
    }
  }

  const display0 = () => {
    let list = [];
    for (let index = 1; index <= props.lastPage; index++) {
      list.push(
        <Link href={`/news?page=${index}`}>
          <a className={cn("pagination__page", { "active": (index == props.currentPage) })}>{index}</a>
        </Link>
      );
    }

    return list;
  }

  const display1 = () => {
    let list = [];
    for (let index = 1; index <= 4; index++) {
      list.push(
        <Link href={`/news?page=${index}`}>
          <a className={cn("pagination__page", { "active": (index == props.currentPage) })}>{index}</a>
        </Link>
      );
    }
    list.push(<i class="lni lni-line-dotted pagination__dots"></i>);
    list.push(
      <Link href={`/news?page=${props.lastPage}`}>
        <a className="pagination__page">{props.lastPage}</a>
      </Link>
    );
    list.push(<Button size="small"><span className="icon-arrow-right2"></span></Button>);

    return list;
  }

  const display2 = () => {
    let list = [];
    list.push(<Button size="small"><span className="icon-arrow-left2"></span></Button>);
    for (let index = 1; index <= 4; index++) {
      list.push(
        <Link href={`/news?page=${index}`}>
          <a className={cn("pagination__page", { "active": (index == props.currentPage) })}>{index}</a>
        </Link>
      );
    }
    list.push(<i class="lni lni-line-dotted pagination__dots"></i>);
    list.push(
      <Link href={`/news?page=${props.lastPage}`}>
        <a className="pagination__page">{props.lastPage}</a>
      </Link>
    );
    list.push(<Button size="small"><span className="icon-arrow-right2"></span></Button>);

    return list;
  }

  const display3 = () => {
    let list = [];
    list.push(<Button size="small"><span className="icon-arrow-left2"></span></Button>);
    list.push(
      <Link href={`/news?page=${1}`}>
        <a className="pagination__page">1</a>
      </Link>
    );
    list.push(<i class="lni lni-line-dotted pagination__dots"></i>);
    for (let index = props.currentPage - 1; index <= props.currentPage + 1; index++) {
      list.push(
        <Link href={`/news?page=${index}`}>
          <a className={cn("pagination__page", { "active": (index == props.currentPage) })}>{index}</a>
        </Link>
      );
    }
    list.push(<i class="lni lni-line-dotted pagination__dots"></i>);
    list.push(
      <Link href={`/news?page=${props.lastPage}`}>
        <a className="pagination__page">{props.lastPage}</a>
      </Link>
    );
    list.push(<Button size="small"><span className="icon-arrow-right2"></span></Button>);

    return list;
  }

  const display4 = () => {
    let list = [];
    list.push(<Button size="small"><span className="icon-arrow-left2"></span></Button>);
    list.push(
      <Link href={`/news?page=${1}`}>
        <a className="pagination__page">1</a>
      </Link>
    );
    list.push(<i class="lni lni-line-dotted pagination__dots"></i>);
    for (let index = props.lastPage - 3; index <= props.lastPage; index++) {
      list.push(
        <Link href={`/news?page=${index}`}>
          <a className={cn("pagination__page", { "active": (index == props.currentPage) })}>{index}</a>
        </Link>
      );
    }
    list.push(<Button size="small"><span className="icon-arrow-right2"></span></Button>);

    return list;
  }

  const display5 = () => {
    let list = [];
    list.push(<Button size="small"><span className="icon-arrow-left2"></span></Button>);
    list.push(
      <Link href={`/news?page=${1}`}>
        <a className="pagination__page">1</a>
      </Link>
    );
    list.push(<i class="lni lni-line-dotted pagination__dots"></i>);
    for (let index = props.lastPage - 3; index <= props.lastPage; index++) {
      list.push(
        <Link href={`/news?page=${index}`}>
          <a className={cn("pagination__page", { "active": (index == props.currentPage) })}>{index}</a>
        </Link>
      );
    }

    return list;
  }

  return (
    <nav className="pagination">
      {displayPagination()}
    </nav>
  );
};

export default Pagination;