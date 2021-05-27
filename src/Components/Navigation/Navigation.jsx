import React, { useState } from "react";
import "./NavigationStyles.css";
// import classNames from "classnames/bind";

// Components
import Search from "./Search";
// import SettingsTab from "./SettingsTab";

// Router

import { NavLink } from "react-router-dom";

//Material-Ui

import {
  Drawer,
  CardMedia,
  List,
  ListItem,
  Icon,
  Fab,
  makeStyles,
  useTheme,
  useMediaQuery,
  Typography,
} from "@material-ui/core";

// import PropTypes from "prop-types";

// import { makeStyles, useTheme } from "@material-ui/core/styles";

// Logo
import Logo from "../../img/logo_transparent.png";
import TmdbLogo from "../../img/tmdb-2.svg";
// === Icons ===
import MenuIcon from "@material-ui/icons/Menu";

// ==== Navigation style ====

// Navigation width
const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    position: "fixed",
    top: "25px",
    left: "25px",
    transition: "opacity .2s ease-in-out",
    zIndex: 20000,
  },

  drawerPaper: {
    width: drawerWidth,

    display: "flex",
    flexDirection: "column",

    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",
    overflowX: "hidden",

    [theme.breakpoints.down("md")]: {
      minWidth: "300px",
      maxWidth: "40%",
      width: "40%",

      display: "flex",

      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#202B34",
    },
  },

  navTabs: {
    display: "flex",

    padding: "1.3rem 6rem",
    textTransform: "capitalize",
    color: "rgba(255, 255, 255, 0.5)",
  },

  typography: {
    fontWeight: 100,
  },
  icon: {
    marginRight: "1.3rem",
    fontSize: "2rem",
    fill: "rgba(255, 255, 255, 0.5)",
  },

  logo: {
    width: "9.5rem",
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const navTabs = ["trending", "newest", "upcoming", "discover", "watchlist"];
  const navTabsIcons = [
    "theaters",
    "trending_up",
    "arrow_upward",
    "movie_filter",
    "star",
    "settings",
  ];

  // const [activeTab, setActiveTab] = useState(0);
  // const [settings, setSettings] = useState(true);

  const [openMenu, setOpenMenu] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // Handle close navigation
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenMenu(open);
  };

  // const handleActiveTab = (i) => {
  //   setActiveTab(i);
  // };

  return (
    <>
      {matches && (
        <Fab
          className={classes.menuIcon}
          style={
            openMenu
              ? { visibility: "hidden", opacity: "0" }
              : { visibility: "visible", opacity: "1" }
          }
          color="primary"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </Fab>
      )}
      <nav
        style={
          matches ? { minWidth: 0 } : { minWidth: drawerWidth, height: "100vh" }
        }
      >
        <Drawer
          open={openMenu}
          onClose={toggleDrawer(false)}
          variant={matches ? "temporary" : "permanent"}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <CardMedia
            className={classes.logo}
            component="img"
            alt="Logo"
            image={Logo}
          />

          <Search />

          <List
            style={{
              width: "100%",
            }}
          >
            {navTabs.map((tab, index) => {
              return (
                <ListItem button style={{ padding: "0" }} key={index}>
                  <NavLink
                    to={`/${tab}`}
                    activeStyle={{
                      color: "white",
                      fill: "white",
                    }}
                    className={classes.navTabs}
                  >
                    <Icon className={classes.icon}>{navTabsIcons[index]}</Icon>
                    <Typography variant="h4" className={classes.typography}>
                      {tab}
                    </Typography>
                  </NavLink>
                </ListItem>
              );
            })}
          </List>
          <CardMedia
            className={classes.logo}
            component="img"
            alt="The movie data base logo"
            image={TmdbLogo}
          />
        </Drawer>
      </nav>
    </>
  );
}
