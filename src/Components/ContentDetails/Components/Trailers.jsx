import React from "react";
import ReactPlayer from "react-player/lazy";

// Utils
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../../Utils/fetchingQuery";

//Material-ui
import { makeStyles, useMediaQuery, Grid, Typography } from "@material-ui/core";

// Spinner
import PulseLoader from "react-spinners/PulseLoader";

// Lazy load
import { LazyLoadComponent } from "react-lazy-load-image-component";

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

  lazyLoad: {
    display: "flex",
    minWidth: "300px",
    height: "13rem",
    margin: "1.5rem auto",
    backgroundColor: "black",

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
  const smallBp = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Fetching media videos
  const { data: videosData, error: videosError } = useSWR(
    fetchingQuery(`${mediaType}/${id}/videos`),
    fetcher
  );

  if (!videosData)
    return (
      <div className={classes.lazyLoad}>
        <PulseLoader color="RGB(240, 5, 75)" css={"margin: auto;"} size={10} />
      </div>
    );
  // <PulseLoader color="RGB(240, 5, 75)" css={"margin: auto;"} size={10} />

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
          {makeVideoUrlArr(videos).map((url, index) => (
            <LazyLoadComponent
              key={index}
              delayTime={800}
              placeholder={
                <div className={classes.lazyLoad}>
                  <PulseLoader
                    color="RGB(240, 5, 75)"
                    css={"margin: auto;"}
                    size={10}
                  />
                </div>
              }
            >
              <ReactPlayer
                className={classes.videPlayer}
                playing={false}
                controls
                width="100%"
                height={smallBp ? "13rem" : "40%"}
                key={url}
                url={url}
              />
            </LazyLoadComponent>
          ))}
        </Grid>
      )}
    </>
  );
}
