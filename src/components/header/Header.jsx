import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__menu header__menu--close">
        <ul className="header__menu-items">
          <li className="header__menu-item">
            <a className="header__menu-link">Woman</a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link">Man</a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link">New</a>
          </li>
        </ul>
      </nav>
      <div className="header__nav">
        <a className="header__nav-logo"></a>
        <ul className="header__nav-actions">
          <li className="header__nav-action">
            <button className="header__nav-button header__nav-button--search"></button>
          </li>
          <li className="header__nav-action">
            <button className="header__nav-button header__nav-button--cart"></button>
          </li>
          <li className="header__nav-action header__nav-action--onMobile">
            <button className="header__nav-button header__nav-button--burger"></button>
          </li>
        </ul>
      </div>
    </header>
  );
}
