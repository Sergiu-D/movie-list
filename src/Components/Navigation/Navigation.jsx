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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

import { makeStyles, useTheme } from "@material-ui/core/styles";

// === Icons ===
import TheatersIcon from "@material-ui/icons/Theaters";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import StarIcon from "@material-ui/icons/Star";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  drawerPaper: {
    width: "inherit",
    backgroundColor: "transparent",
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
  ];

  const [openNav, setOpenNav] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState(true);

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
    <Drawer
      // TODO For mobile, remove width
      style={openNav ? { width: "300px" } : { width: "0px" }}
      variant="persistent"
      anchor="left"
      open={openNav}
      classes={{ paper: classes.drawerPaper }}
    >
      <img src="../../../img/logo_transparent.png" alt="logo" />
      <List>
        {navTabs.map((tab, index) => {
          const activeTabStyle = classNames("list-item", {
            active: activeTab === index,
          });

          return (
            <Link to={`/${tab}`} key={index}>
              <ListItem button onClick={() => handleActiveTab(index)}>
                <ListItemIcon>{navTabsIcons[index]}</ListItemIcon>
                <ListItemText primary={tab} className={activeTabStyle} />
              </ListItem>
            </Link>
          );
        })}
        <SettingsTab />
      </List>
    </Drawer>
  );
}
