import React from "react";

//Material-ui

import { makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    position: "absolute",
    maxWidth: "fit-content",
    top: 3,
    right: 3,
    zIndex: 100,
  },

  circle: {
    backgroundColor: "black",
    borderRadius: "50%",
  },

  vote: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    color: "white",
    fontSize: "1rem",
    fontWeight: 700,
  },
});

export default function AverageVote({ vote_average }) {
  const classes = useStyles();

  function getVoteAverageBg(vote) {
    if (vote < 1) return "white";
    if (vote >= 8) return "green";
    if (vote > 5) return "orange";
    if (vote <= 5) return "red";
  }
  return (
    <div className={classes.wrapper}>
      <CircularProgress
        className={classes.circle}
        style={{
          color: `${getVoteAverageBg(vote_average)}`,
        }}
        variant="determinate"
        value={vote_average * 10}
      />
      <span className={classes.vote}>
        {vote_average < 1 ? "N/A" : vote_average}
      </span>
    </div>
  );
}
