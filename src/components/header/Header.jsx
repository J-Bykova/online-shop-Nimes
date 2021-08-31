import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-menu">
          <li className="header__nav-menu-item">
            <a className="header__nav-menu-link">Woman</a>
          </li>
          <li className="header__nav-menu-item">
            <a className="header__nav-menu-link">Man</a>
          </li>
          <li className="header__nav-menu-item">
            <a className="header__nav-menu-link">New</a>
          </li>
        </ul>
      </nav>
      <a className="header__logo">Nîmes</a>
      <ul className="header__actions">
        <li className="header__action">
          <button className="header__action-button header__action-button--search"></button>
        </li>
        <li className="header__action">
          <button className="header__action-button header__action-button--cart"></button>
        </li>
      </ul>
    </header>
  );
}
