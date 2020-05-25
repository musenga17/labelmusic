import React from "react";
import style from "./container.module.scss";

const Container = () => {
  return (
    <div>
      <p className={style.title}></p>
      <a className={"button"} href="./test">
        ALLER SUR TEST
      </a>
      <img
        src="/images/logo_confidential_inverse.svg"
        alt=""
        className="logo"
      />
    </div>
  );
};

export default Container;
