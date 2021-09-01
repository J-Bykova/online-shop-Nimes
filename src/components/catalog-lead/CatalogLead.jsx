import React from "react";
import "./CatalogLead.scss";

export default function CatalogLead() {
  return (
    <section className="catalog-lead">
      <div className="catalog-lead__text-container">
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link"></a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link"></a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link"></a>
          </li>
        </ul>
      </div>
      <div className="catalog-lead__photo-container">
        <img className="catalog-lead__photo"
             src="/img/catalogLead-photo-1x.png"
             srcSet="/img/catalogLead-photo-1x.png 1x, /img/catalogLead-photo-2x.png 2x"
             width="299" height="260"
             alt=""/>
      </div>
    </section>
  );
}