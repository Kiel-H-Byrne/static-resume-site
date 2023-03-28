import { NavLink } from "@remix-run/react";
import React from "react";

const MainNav = () => {
  const activeStyle = {
    textDecoration: "underline",
  };
  const activeClassName = "underline";
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="voice"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Voice Over Demo Reel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="blog">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Blog
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
