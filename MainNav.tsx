import { List, ListItem } from "@chakra-ui/react";
import { Links, NavLink } from "@remix-run/react";
import React from "react";
import { navLinks } from "./metadata.json";

const MainNav = () => {
  const activeStyle = {
    textDecoration: "underline",
  };
  return (
    // <header id="header">
    <nav className="nav-menu">
      <List>
        <Links />
        {navLinks.map((l) => (
          <ListItem key={l.link}>
            <NavLink
              to={l.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {l.text ?? l.link.toUpperCase()}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </nav>
    // </header>
  );
};

export default MainNav;
