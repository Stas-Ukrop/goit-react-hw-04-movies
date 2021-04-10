import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import "./AppBar.module.css";
const AppBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to={routes.home}
              className="nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.movies}
              className="nav-link"
              activeClassName="active"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
