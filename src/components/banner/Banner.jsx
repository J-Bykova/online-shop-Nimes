import React from "react";
import "./Banner.scss";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__text-container">
        <p className="banner__subtitle">The quality you deserve</p>
        <h1 className="banner__title">DENIM</h1>
        <button className="banner__button">Check new collection</button>
      </div>
      <div className="banner__photo-container">
        <img className="banner__photo"
             src="/img/banner-photo-1x.png"
             srcSet="/img/banner-photo-1x.png 1x, /img/banner-photo-2x.png 2x"
             width="430" height="518"
             alt=""/>
      </div>
    </section>
  );
}