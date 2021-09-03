import React from "react";
import "./Goods.scss";

export default function Goods(props) {
  return (
    <section className="goods">
      <header className="goods__header">
        <h1 className="goods__title"></h1>
        <span className="goods__link"></span>
      </header>
      <ul className="goods__card">
        <li className="goods__card">
          <img className="goods__card-photo"/>
          <span className="goods__card-name"></span>
          <span className="goods__card-prise"></span>
        </li>
      </ul>
    </section>
  );
}