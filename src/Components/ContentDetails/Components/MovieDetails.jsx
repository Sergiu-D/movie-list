import React from "react";

// Utils
import formatRuntime from "../../../Utils/formatRuntime";

//Material-ui
import { Typography } from "@material-ui/core";

export default function MovieDetails({ mediaData, useStyles }) {
  const classes = useStyles();
  const { release_date, runtime, overview } = mediaData;

  const reverseReleaseDate = (date) => {
    const reversedDate = date.split("-").slice(0, 1).reverse().join(" ");
    return reversedDate;
  };
  return (
    <>
      <Typography variant="h5" paragraph={true}>
        {reverseReleaseDate(release_date)}
      </Typography>
      <Typography variant="h5" paragraph={true}>
        {formatRuntime(runtime)}
      </Typography>
      <Typography variant="h6" paragraph={true} className={classes.overview}>
        {overview}
      </Typography>
    </>
  );
}
