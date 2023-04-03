import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  IconButton,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from "@chakra-ui/react";
import { Links, NavLink } from "@remix-run/react";
import React from "react";
import { navLinks } from "./metadata.json";

const MainNav = () => {
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  console.log(isLargerThan400);
  const activeStyle = {
    textDecoration: "underline",
  };
  return (
    // <header id="header">
    <nav className="nav-menu">
      {isLargerThan400 ? (
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
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />

          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </nav>
    // </header>
  );
};

export default MainNav;
