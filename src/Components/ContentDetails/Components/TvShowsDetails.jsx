import React from "react";

// Utils
import formatRuntime from "../../../Utils/formatRuntime";

//Material-ui
import { Typography } from "@material-ui/core";

export default function TvShowsDetails({ mediaData, useStyles }) {
  const classes = useStyles();
  const {
    status,
    first_air_date,
    next_episode_to_air,
    last_air_date,
    number_of_seasons,
    number_of_episodes,
    episode_run_time,
    overview,
  } = mediaData;

  // In Production Planned

  const showsStatus =
    status.toLowerCase() === "returning series" ? "On Air" : status;

  return (
    <>
      <Typography variant="h5" paragraph>
        Status: <span className={classes.proprietySpan}> {showsStatus}</span>
      </Typography>
      {showsStatus === "In Production" || showsStatus === "Planned" ? (
        <Typography variant="h5" paragraph>
          First episode air date:{" "}
          <span className={classes.proprietySpan}>
            {first_air_date.split("-").reverse().join(".")}
          </span>
        </Typography>
      ) : (
        <Typography variant="h5" paragraph>
          Airing date:{" "}
          <span className={classes.proprietySpan}>
            {first_air_date.slice(0, 4)} ~{" "}
            {next_episode_to_air
              ? `next episode: ${next_episode_to_air.air_date
                  .split("-")
                  .reverse()
                  .join(".")}`
              : last_air_date.slice(0, 4)}
          </span>
        </Typography>
      )}

      <Typography variant="h5" paragraph>
        Seasons: {number_of_seasons}
      </Typography>
      <Typography variant="h5" paragraph>
        Total Episodes: {number_of_episodes}
      </Typography>
      <Typography variant="h5" paragraph>
        Runtime per episode: {formatRuntime(episode_run_time[0])}
      </Typography>
      <Typography variant="h6" className={classes.overview}>
        {overview}
      </Typography>
    </>
  );
}
