import React, { useState } from "react";
import "./NavigationStyles.css";
import classNames from "classnames/bind";

// Components
import SettingsTab from "./SettingsTab";

// Router

import { Link } from "react-router-dom";

//Material-Ui

import {
  Drawer,
  Divider,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Fab,
  makeStyles,
  useTheme,
  useMediaQuery,
  Typography,
} from "@material-ui/core";

import PropTypes from "prop-types";

// import { makeStyles, useTheme } from "@material-ui/core/styles";

// Logo
import Logo from "../../img/logo_transparent.png";
import TmdbLogo from "../../img/tmdb-2.svg";
// === Icons ===
import MenuIcon from "@material-ui/icons/Menu";

// Navigation style
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    position: "fixed",
    top: "25px",
    left: "25px",
    transition: "opacity .2s ease-in-out",
    zIndex: 20000,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    flexShrink: 0,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",

    [theme.breakpoints.down("sm")]: {
      width: "70%",
      backgroundColor: "inherit",
    },
  },
  mobileDrawerPaper: {
    width: "70%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#202B34",
  },
  listItem: {
    padding: "1rem 5rem",
    textTransform: "capitalize",
    color: "rgba(255, 255, 255, 0.5)",
  },
  activeItem: {
    padding: "1rem 5rem",
    textTransform: "capitalize",
    color: "rgba(255, 255, 255)",
  },
  icon: {
    marginRight: "1rem",
    fontSize: "1.8rem",
    fill: "rgba(255, 255, 255, 0.5)",
  },
  activeIcon: {
    marginRight: "1rem",
    fontSize: "1.8rem",
    fill: "rgba(255, 255, 255)",
  },
  logo: {
    width: "9rem",
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

  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState(true);

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

  const handleActiveTab = (i) => {
    setActiveTab(i);
  };

  return (
    <>
      {matches && (
        <Fab
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

      <Drawer
        open={openMenu}
        onClose={toggleDrawer(false)}
        variant={matches ? "temporary" : "permanent"}
        className={classes.drawerPaper}
        classes={{
          paper: matches ? classes.mobileDrawerPaper : classes.drawerPaper,
        }}
      >
        <CardMedia
          className={classes.logo}
          component="img"
          alt="Logo"
          image={Logo}
        />

        {/* <img src="./ " alt="logo" /> */}
        <List style={{ width: "100%" }}>
          {navTabs.map((tab, index) => {
            return (
              <Link to={`/${tab}`} key={index} onClick={toggleDrawer(false)}>
                <ListItem
                  button
                  onClick={() => handleActiveTab(index)}
                  className={
                    activeTab === index ? classes.activeItem : classes.listItem
                  }
                >
                  <Icon
                    className={
                      activeTab === index ? classes.activeIcon : classes.icon
                    }
                  >
                    {navTabsIcons[index]}
                  </Icon>
                  <Typography variant="h4" style={{ fontWeight: "100" }}>
                    {tab}
                  </Typography>
                  {/* <ListItemText primary={tab} /> */}
                </ListItem>
              </Link>
            );
          })}
          <SettingsTab />
        </List>
        <CardMedia
          className={classes.logo}
          component="img"
          alt="The movie data base logo"
          image={TmdbLogo}
        />
      </Drawer>
    </>
  );
}
