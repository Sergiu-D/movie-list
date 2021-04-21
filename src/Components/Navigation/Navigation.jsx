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
  Hidden,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Fab,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import PropTypes from "prop-types";

// import { makeStyles, useTheme } from "@material-ui/core/styles";

// === Icons ===
import TheatersIcon from "@material-ui/icons/Theaters";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import StarIcon from "@material-ui/icons/Star";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// Navigation style
const drawerWidth = 300;

const useStyles = makeStyles({
  menuIcon: {
    position: "fixed",
    top: "25px",
    left: "25px",
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
    width: drawerWidth,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#202B34",
  },
  icon: {
    fill: "#fff",
  },
});

export default function Navigation() {
  const classes = useStyles();
  const navTabs = ["trending", "newest", "upcoming", "discover", "watchlist"];
  const navTabsIcons = [
    <TheatersIcon className={classes.icon} />,
    <TrendingUpIcon className={classes.icon} />,
    <ArrowUpwardIcon className={classes.icon} />,
    <MovieFilterIcon className={classes.icon} />,
    <StarIcon className={classes.icon} />,
    <SettingsIcon className={classes.icon} />,
  ];

  const [openNav, setOpenNav] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState(true);

  const [openMenu, setOpenMenu] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  const handleActiveTab = (i) => {
    setActiveTab(i);
  };

  const handleMouseEnter = () => {
    setSettings(true);
  };

  const handleMouseLeave = () => {
    setSettings(false);
  };

  return (
    <>
      {matches && (
        <Fab
          color="primary"
          className={classes.menuIcon}
          onClick={handleOpenMenu}
        >
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </Fab>
      )}
      <Drawer
        open={openMenu}
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
          image="../../img/logo_transparent.png"
          // title={title}
        />

        {/* <img src="./ " alt="logo" /> */}
        <List>
          {navTabs.map((tab, index) => {
            const activeTabStyle = classNames("list-item", {
              active: activeTab === index,
            });

            return (
              <Link to={`/${tab}`} key={index}>
                <ListItem
                  button
                  onClick={() => handleActiveTab(index)}
                  className={activeTabStyle}
                >
                  <ListItemIcon>{navTabsIcons[index]}</ListItemIcon>
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
