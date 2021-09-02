import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__logo"></a>
      <ul className="footer__nav">
        <li className="footer__nav-item">
          <a className="footer__nav-link">Shop</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link">Delivery</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link">Service</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link">Sitemap</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link">Contacts</a>
        </li>
      </ul>
      <ul className="footer__socials">
        <li className="footer__social">
          <a className="footer__social-link">
            <img src="/img/logo-fb.svg"
                 width="11" height="20"
                 alt=""/>
          </a>
        </li>
        <li className="footer__social">
          <a className="footer__social-link">
            <img src="/img/logo-in.svg"
                 width="20" height="20"
                 alt=""/>
          </a>
        </li>
        <li className="footer__social">
          <a className="footer__social-link">
            <img src="/img/logo-pi.svg"
                 width="20" height="20"
                 alt=""/>
          </a>
        </li>
        <li className="footer__social">
          <a className="footer__social-link">
            <img src="/img/logo-tv.svg"
                 width="20" height="16"
                 alt=""/>
          </a>
        </li>
      </ul>
    </footer>
  );
}