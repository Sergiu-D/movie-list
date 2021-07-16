import React from "react";

// Utils
import formatRuntime from "../../../Utils/formatRuntime";

//Material-ui
import { Typography } from "@material-ui/core";

export default function TvShowsDetails({ mediaData, useStyles }) {
  const classes = useStyles();
  const {
    first_air_date,
    next_episode_to_air,
    last_air_date,
    number_of_seasons,
    number_of_episodes,
    episode_run_time,
    overview,
  } = mediaData;
  return (
    <>
      <Typography component="h5" paragraph={true}>
        {first_air_date.slice(0, 4)} ~{" "}
        {next_episode_to_air
          ? `next episode: ${next_episode_to_air.air_date
              .split("-")
              .reverse()
              .join("/")}`
          : last_air_date.slice(0, 4)}
      </Typography>
      <Typography component="h5" paragraph={true}>
        Seasons: {number_of_seasons}
      </Typography>
      <Typography component="h5" paragraph={true}>
        Total Episodes: {number_of_episodes}
      </Typography>
      <Typography component="h5" paragraph={true}>
        Runtime per episode: {formatRuntime(episode_run_time[0])}
      </Typography>
      <Typography component="h6" className={classes.overview}>
        {overview}
      </Typography>
    </>
  );
}
