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
  const [openNav, setOpenNav] = useState(true);
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
          <Link to="/trending">
            <List>
              <ListItem button>
                <ListItemIcon>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary={"Trending"} />
              </ListItem>
            </List>
          </Link>
          <Link to="/newest">
            <List>
              <ListItem button>
                <ListItemIcon>
                  <TheatersIcon />
                </ListItemIcon>
                <ListItemText primary={"Newest"} />
              </ListItem>
            </List>
          </Link>
          <Link to="/upcoming">
            <List>
              <ListItem button>
                <ListItemIcon>
                  <ArrowUpwardIcon />
                </ListItemIcon>
                <ListItemText primary={"Upcoming"} />
              </ListItem>
            </List>
          </Link>
          <Link to="/discover">
            <List>
              <ListItem button>
                <ListItemIcon>
                  <MovieFilterIcon />
                </ListItemIcon>
                <ListItemText primary={"Discover"} />
              </ListItem>
            </List>
          </Link>
          <Link to="/watchlist">
            <List>
              <ListItem button>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={"Watch list"} />
              </ListItem>
            </List>
          </Link>
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
