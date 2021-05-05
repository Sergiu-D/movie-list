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
} from "@material-ui/core";

import PropTypes from "prop-types";

// import { makeStyles, useTheme } from "@material-ui/core/styles";

// === Icons ===
import MenuIcon from "@material-ui/icons/Menu";

// Navigation style
const drawerWidth = 300;

const useStyles = makeStyles({
  menuIcon: {
    position: "fixed",
    top: "25px",
    left: "25px",
    transition: "opacity .2s ease-in-out",
    zIndex: 20000,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  mobileDrawerPaper: {
    width: "70%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#202B34",
  },
  listItem: {
    textTransform: "capitalize",
    color: "rgba(255, 255, 255, 0.5)",
  },
  activeItem: {
    textTransform: "capitalize",
    color: "rgba(255, 255, 255)",
  },
  icon: {
    fill: "rgba(255, 255, 255, 0.5)",
  },
  activeIcon: {
    fill: "rgba(255, 255, 255)",
  },
});

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
        className={classes.drawer}
        classes={{
          paper: matches ? classes.mobileDrawerPaper : classes.drawerPaper,
        }}
      >
        <CardMedia
          // className={classes.media}
          component="img"
          alt="Logo"
          image="../img/logo_transparent.png"
          // title={title}
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
                  style={{
                    padding: "1rem 5rem",
                  }}
                >
                  <Icon
                    className={
                      activeTab === index ? classes.activeIcon : classes.icon
                    }
                  >
                    {navTabsIcons[index]}
                  </Icon>

                  <ListItemText primary={tab} />
                </ListItem>
              </Link>
            );
          })}
          <SettingsTab />
        </List>
      </Drawer>
    </>
  );
}
