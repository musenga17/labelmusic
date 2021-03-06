import React from 'react';
import "./Navbar.module.scss";
import data from "../../data/data.json";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container navbar__container">
        {props.home ?
          <img src="images/logo_confidential_inverse.svg" alt="" className="navbar__container__logo" />
          :
          <img src="images/logo_confidential.svg" alt="" className="navbar__container__logo" />
        }
        <div className="navbar__container__nav">
          {data.nav.map((menu, index) => (
            <a key={index} href={menu.link} className="navbar__container__nav__menu">{menu.label}</a>
          ))}
        </div>
        <div className="navbar__container__tools">
          <i class="lni lni-search-alt"></i>
          <i class="lni lni-cart"></i>
          <i class="lni lni-menu"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;