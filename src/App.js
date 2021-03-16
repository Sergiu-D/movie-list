import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Pages
import Trending from "./Components/Trending";
import Newest from "./Components/Newest";
import Upcoming from "./Components/Upcoming";
import Discover from "./Components/Discover";
import Watchlist from "./Components/Watchlist";

// Material Ui
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// === Icons ===
import TheatersIcon from "@material-ui/icons/Theaters";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles({
  drawerPaper: { width: "inherit" },
});

function App() {
  const classes = useStyles();
  const navTabs = ["trending", "newest", "discover", "watchlist"];
  const navTabsIcons = [
    <TheatersIcon />,
    <TrendingUpIcon />,
    <ArrowUpwardIcon />,
    <MovieFilterIcon />,
    <StarIcon />,
  ];

  const [openNav, setOpenNav] = useState(true);
  const [activeTab, setActiveTab] = useState(navTabs);

  const handleActiveTab = (e) => {
    console.log(e.target);
  };

  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Drawer
          // TODO For mobile, remove width
          style={openNav ? { width: "240px" } : { width: "0px" }}
          variant="persistent"
          anchor="left"
          open={openNav}
          classes={{ paper: classes.drawerPaper }}
        >
          {navTabs.map((tab, index) => {
            return (
              <Link to={`/${tab}`} key={index}>
                <List>
                  <ListItem button onClick={() => handleActiveTab}>
                    <ListItemIcon>{navTabsIcons[index]}</ListItemIcon>
                    <ListItemText
                      primary={tab}
                      style={{
                        textTransform: "capitalize",
                        fontWeight: activeTab ? "bold" : "light",
                      }}
                    />
                  </ListItem>
                </List>
              </Link>
            );
          })}
          ;
        </Drawer>

        <main>
          <Switch>
            <Route exact path="/">
              <Trending />
            </Route>
            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/newest">
              <Newest />
            </Route>
            <Route path="/upcoming">
              <Upcoming />
            </Route>
            <Route path="/discover">
              <Discover />
            </Route>
            <Route path="/watchlist">
              <Watchlist />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
