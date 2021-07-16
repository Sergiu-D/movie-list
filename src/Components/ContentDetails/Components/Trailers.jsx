import React from "react";
import ReactPlayer from "react-player/lazy";

import { useLocation } from "react-router-dom";

// Utils
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../../Utils/fetchingQuery";

//Material-ui
import { makeStyles, useMediaQuery, Grid, Typography } from "@material-ui/core";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";

// Styles
const useStyles = makeStyles((theme) => ({
  videPlayer: {
    minWidth: "300px",
    margin: "1.5rem auto",

    aspectRatio: "16/9",
    [theme.breakpoints.down("sm")]: {
      minWidth: "95vw",
      aspectRatio: "1/1",
    },
  },
}));

export default function Trailers(props) {
  const { id, mediaType } = props;

  const classes = useStyles();

  // Media query
  const mediumBp = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const smallBp = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Fetching media videos
  const { data: videosData, error: videosError } = useSWR(
    fetchingQuery(`${mediaType}/${id}/videos`),
    fetcher
  );

  if (!videosData)
    return (
      <PuffLoader color="RGB(240, 5, 75)" css={"margin: 0 auto;"} size={100} />
    );
  if (videosError) return <h2>Error!</h2>;

  const videos = videosData.results;
  function makeVideoUrlArr(v) {
    const videosURL = [];

    const filteredVideosType = v.filter(
      (videoObj) =>
        videoObj.type.toLowerCase() === "trailer" ||
        videoObj.type.toLowerCase() === "teaser"
    );

    filteredVideosType.forEach((video) => {
      const youTubeURL = `https://www.youtube.com/watch?v=${video.key}`;

      if (ReactPlayer.canPlay(youTubeURL)) return videosURL.push([youTubeURL]);
    });

    return videosURL.slice(0, 2);
  }

  return (
    <>
      {!makeVideoUrlArr(videos).length ? (
        ""
      ) : (
        <Grid item lg={3} md={4} sm={12} className={classes.gridItem}>
          <Typography variant="h2" style={{ textAlign: "center" }}>
            Trailers
          </Typography>
          {makeVideoUrlArr(videos).map((url) => (
            <ReactPlayer
              className={classes.videPlayer}
              playing={false}
              controls
              width="100%"
              height={smallBp ? "13rem" : "40%"}
              key={url}
              url={url}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
