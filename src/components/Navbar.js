import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">Invoice Test</div>
    <ul className="navbar-nav ">
      <li className="nav-item">
        <NavLink className="nav-link" to="/terminal" exact>
          Терминалы
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/buyers">
          Покупатели
        </NavLink>
      </li>
    </ul>
  </nav>
);
