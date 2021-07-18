import React from "react";

// Utils
import formatRuntime from "../../../Utils/formatRuntime";

//Material-ui
import { Typography } from "@material-ui/core";

export default function MovieDetails({ mediaData, useStyles }) {
  const classes = useStyles();
  const { release_date, status, runtime, overview } = mediaData;

  const movieStatus = status.toLowerCase() === "released" ? "" : status;

  const reverseReleaseDate = (date) => {
    const reversedDate = date.split("-").reverse().join(".");
    return reversedDate;
  };
  return (
    <>
      {movieStatus && (
        <Typography variant="h5" paragraph className={classes.propriety}>
          Status: <span className={classes.proprietySpan}> {movieStatus}</span>
        </Typography>
      )}

      <Typography variant="h5" paragraph className={classes.propriety}>
        Release date:{" "}
        <span className={classes.proprietySpan}>
          {" "}
          {reverseReleaseDate(release_date) || "TBA"}
        </span>
      </Typography>

      <Typography variant="h5" paragraph className={classes.propriety}>
        Runtime:{" "}
        <span className={classes.proprietySpan}> {formatRuntime(runtime)}</span>
      </Typography>
      <Typography variant="h6" paragraph className={classes.overview}>
        {overview}
      </Typography>
    </>
  );
}
