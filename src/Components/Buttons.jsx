import React, { useState, useContext } from "react";

// Context
import { WatchListContext } from "../Context/WatchListContext";

// Material-Ui
import { Button, IconButton, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Material-Ui Icons
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import BookmarkIcon from "@material-ui/icons/Bookmark";

const useStyles = makeStyles((theme) => ({
  // Back to top button styles
  backToTopBtn: {
    minWidth: "70px",
    minHeight: "70px",
    borderRadius: "50%",
    position: "fixed",
    bottom: "5rem",
    right: "5rem",
    zIndex: "10000",
    cursor: "pointer",
    backgroundColor: "rgb(58, 165, 170)",
    transition: "none",
    boxShadow: "0 1px 15px 1px rgba(0, 0, 0, .5)",

    "&:hover": {
      boxShadow: "0 1px 15px 3px rgba(0, 0, 0, .9)",
      backgroundColor: "rgb(64, 191, 198)",
    },

    [theme.breakpoints.down("sm")]: {
      minWidth: "60px",
      minHeight: "60px",
      bottom: "2rem",
      right: "2rem",
    },
  },

  backToTopIcon: {
    fontSize: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },

  // Add to watch list button styles

  watchListSmallBtn: {
    width: "15%",
    height: "7.2%",
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: "500",

    [theme.breakpoints.down("sm")]: {
      top: "5px",
      left: "5px",
    },
  },

  watchListIcon: {
    fontSize: "3.5rem",
    opacity: ".8",
    transition: "opacity .2s ease",

    "&:hover": {
      opacity: "1",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.3rem",
    },
  },

  watchListLargeInactiveBtn: {
    width: "fit-content",
    borderColor: "rgb(255,147,79)",
    color: "rgb(255,147,79)",
    "&:hover": {
      backgroundColor: "rgb(255,147,79)",
      borderColor: "rgb(255,147,79)",
      color: "rgb(255,255,255)",
    },
  },
  watchListLargeActiveBtn: {
    width: "fit-content",
    backgroundColor: "rgb(255,147,79)",
    borderColor: "rgb(255,147,79)",
    color: "rgb(255,255,255)",
    "&:hover": {
      backgroundColor: "rgb(247, 108, 20)",
      borderColor: "rgb(247, 108, 20)",
      color: "rgb(255,255,255)",
    },
  },
}));

const BackToTopBtn = () => {
  const classes = useStyles();

  const [showBtn, setShowBtn] = useState(false);

  document.onscroll = (e) => {
    const scrollFromTop = e.target.scrollingElement.scrollTop;

    if (scrollFromTop > 600) return setShowBtn(true);
    return setShowBtn(false);
  };

  return (
    <Slide direction="up" in={showBtn} mountOnEnter unmountOnExit>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={classes.backToTopBtn}
        variant="contained"
        color="primary"
      >
        <ArrowUpwardIcon className={classes.backToTopIcon} fontSize="large" />
      </Button>
    </Slide>
  );
};

const WatchListBtn = ({ movie, type }) => {
  const classes = useStyles();
  const { list, addItem, removeItem } = useContext(WatchListContext);

  const checkId = list.some((item) => item.id === movie.id);

  if (type === "large")
    return (
      <Button
        onClick={checkId ? () => removeItem(movie) : () => addItem(movie)}
        variant={checkId ? "contained" : "outlined"}
        className={
          checkId
            ? classes.watchListLargeActiveBtn
            : classes.watchListLargeInactiveBtn
        }
      >
        {checkId ? "Remove from watch list" : "Add to watch list"}
      </Button>
    );

  if (type === "small")
    return (
      <IconButton
        onClick={checkId ? () => removeItem(movie) : () => addItem(movie)}
        className={classes.watchListSmallBtn}
      >
        <BookmarkIcon
          className={classes.watchListIcon}
          style={
            checkId
              ? {
                  fill: "rgb(255,147,79)",

                  opacity: "1",
                }
              : {
                  stroke: "rgb(255,147,79)",
                  strokeWidth: "1.5px",
                  fill: "transparent",
                }
          }
        />
      </IconButton>
    );
};

export { BackToTopBtn, WatchListBtn };
