import React, { useState } from "react";

// Components
import SearchInput from "./SearchInput";

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

// Logo
import Logo from "../../img/logo_transparent.png";
import TmdbLogo from "../../img/tmdb-2.svg";
// === Icons ===
import MenuIcon from "@material-ui/icons/Menu";

// ==== Navigation style ====

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    position: "fixed",
    top: "2rem",
    left: "2rem",

    transition: "opacity .2s ease-in-out",

    zIndex: 20000,
  },

  drawerPaper: {
    width: "300px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",

    [theme.breakpoints.down("md")]: {
      minWidth: "300px",
      width: "30%",
      backgroundColor: "#202B34",
    },
  },

  navLink: {
    width: "100%",

    textTransform: "capitalize",
    color: "rgba(255, 255, 255, 0.5)",
  },
  list: {
    width: "100%",
  },
  listItem: {
    display: "flex",
    padding: "1.5rem 3.5rem",
    [theme.breakpoints.down("md")]: {
      padding: ".8rem 25%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem 25%",
    },
  },

  typography: {
    fontWeight: 100,
  },
  icon: {
    marginRight: "1.5rem",
    fontSize: "2rem",
    fill: "rgba(255, 255, 255, 0.5)",
  },

  logo: {
    width: "11.5rem",

    [theme.breakpoints.down("md")]: {
      width: "10rem",
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const navTabs = ["trending", "newest", "upcoming", "discover", "watchlist"];
  const navTabsIcons = [
    "trending_up",
    "theaters",
    "arrow_upward",
    "movie_filter",
    "star",
    "settings",
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const theme = useTheme();
  const mediumBp = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {mediumBp && (
        <Fab
          className={classes.menuIcon}
          style={
            openMenu
              ? { visibility: "hidden", opacity: "0" }
              : { visibility: "visible", opacity: "1" }
          }
          color="primary"
          onClick={() => setOpenMenu(true)}
        >
          <MenuIcon />
        </Fab>
      )}
      <nav
        style={
          mediumBp ? { minWidth: 0 } : { height: "100vh", flex: "0 0 300px" }
        }
      >
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          variant={mediumBp ? "temporary" : "permanent"}
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

          <SearchInput setOpenMenu={setOpenMenu} />

          <List className={classes.list}>
            {navTabs.map((tab, index) => {
              return (
                <NavLink
                  key={index}
                  to={`/${tab}`}
                  activeStyle={{
                    color: "white",
                    fill: "white",
                  }}
                  className={classes.navLink}
                  onClick={() => setOpenMenu(false)}
                >
                  <ListItem button className={classes.listItem}>
                    <Icon className={classes.icon}>{navTabsIcons[index]}</Icon>
                    <Typography variant="h4" className={classes.typography}>
                      {tab}
                    </Typography>
                  </ListItem>
                </NavLink>
              );
            })}
          </List>

          <div>
            <p
              style={{
                fontSize: ".8rem",
                margin: ".5rem 0",
                // color: "#03B4E3",
                // color:"#8DCEA3",
                fontStyle: "italic",

                background: "linear-gradient(to right, #8DCEA3, #03B4E3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Powered by:
            </p>
            <CardMedia
              className={classes.logo}
              component="img"
              alt="The movie data base logo"
              image={TmdbLogo}
            />
          </div>
        </Drawer>
      </nav>
    </>
  );
}
