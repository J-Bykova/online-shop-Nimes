import React from "react";
import "./CatalogLead.scss";

export default function CatalogLead() {
  return (
    <section className="catalog-lead">
        <div className="catalog-lead__text-container">
          <ul className="breadcrumbs">
            <li className="breadcrumb">
              <a className="breadcrumb__link">All categories</a>
            </li>
            <li className="breadcrumb">
              <a className="breadcrumb__link">Woman</a>
            </li>
            <li className="breadcrumb">
              <a className="breadcrumb__link breadcrumb__link--active">Jackets</a>
            </li>
          </ul>
          <h1 className="catalog-lead__title">Denim Collection <br/> Fall 2019</h1>
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