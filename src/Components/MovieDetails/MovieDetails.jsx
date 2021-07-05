import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

// Utils
import formatRuntime from "../../Utils/formatRuntime";
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import addingMediaType from "../../Utils/addingMediaType";

// Components
import { WatchListBtn } from "../Buttons";

//Material-ui
import { makeStyles, useMediaQuery, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    flexDirection: "column",

    width: "100%",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      margin: "3rem 0",
    },
  },
  gridItemDetails: {
    minHeight: "550px",
  },
  title: {
    fontWeight: 800,
    [theme.breakpoints.down("sm")]: {
      margin: "2.5rem",
      textAlign: "center",
    },
  },

  genres: {
    fontSize: "1.5rem",
    lineHeight: "1.7",
    margin: "1.5rem 0",

    fontWeight: 100,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  overview: {
    marginTop: "auto",
    lineHeight: 1.8,
    columnCount: 2,
    columnRule: "1px inset white",
    columnGap: "10ch",

    [theme.breakpoints.down("md")]: {
      columnCount: 1,
    },
  },

  videPlayer: {
    minWidth: "300px",
    margin: "1.5rem auto",

    aspectRatio: "16/9",
    [theme.breakpoints.down("sm")]: {
      aspectRatio: "1/1",
    },
  },
}));

export default function MovieDetails({
  match: {
    params: { type: mediaType, id },
  },
}) {
  const classes = useStyles();

  // Media query
  const mediumBp = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const smallBp = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const filterMediaType = (callType) => {
    if (mediaType === "movie") {
      return fetchingQuery(
        `movie/${id}${callType === "videos" ? `/${callType}` : null}`
      );
    }

    if (mediaType === "tv") {
      return fetchingQuery(
        `tv/${id}${callType === "videos" ? `/${callType}` : null}`
      );
    }
  };

  // Fetching media details
  const { data: mediaData, error: mediaError } = useSWR(
    filterMediaType(),
    fetcher
  );

  // Fetching media videos
  const { data: videosData, error: videosError } = useSWR(
    filterMediaType("videos"),
    fetcher
  );

  if (!mediaData) return <h1>Loading...</h1>;

  if (!videosData) return <h1>Loading...</h1>;
  if (videosError) return;

  const {
    original_title,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    runtime,
    vote_average,
    genres,
  } = mediaData;

  const modifiedMediaData = addingMediaType([mediaData], mediaType);

  const title = mediaData.title || mediaData.name;

  // Change document title
  document.title = title;

  const movieBg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  const videos = videosData.results;

  const makeVideoUrlArr = (v) => {
    let videosURL = [];

    v.forEach((video) => {
      if (video.type === "Trailer" || video.type === "Teaser")
        return videosURL.push([`https://www.youtube.com/watch?v=${video.key}`]);
    });

    return videosURL;
  };

  const reverseReleaseDate = (date) => {
    const reversedDate = date.split("-").slice(0, 1).reverse().join(" ");
    return reversedDate;
  };

  const getGenres = (g) => {
    const genresArr = [];

    g.forEach((genre) => genresArr.push(genre.name));

    return genresArr.join(" ");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background container */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -5,
        }}
      >
        {/* Background image */}
        <img
          src={movieBg}
          alt={`${title} poster`}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />

        {/* Background overlay */}
        <div
          style={{
            position: "inherit",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background:
              "radial-gradient(circle, rgba(0,54,77,.8) 10% , rgba(0,11,15,0.98) 70%)",
          }}
        ></div>
      </div>
      {/* End background container */}

      <Grid container>
        <Grid
          item
          lg={9}
          md={8}
          sm={12}
          className={classes.gridItem}
          style={{ minHeight: "550px" }}
        >
          <Typography variant="h1" paragraph={true} className={classes.title}>
            {title}
          </Typography>
          <WatchListBtn movie={modifiedMediaData[0]} type="large" />

          <Typography variant="overline" className={classes.genres}>
            {genres.map((genre) => `${genre.name}  `)}
          </Typography>

          {mediaType === "movie" ? (
            <>
              <Typography variant="h5" paragraph={true}>
                {reverseReleaseDate(release_date)}
              </Typography>
              <Typography variant="h5" paragraph={true}>
                {formatRuntime(runtime)}
              </Typography>
              <Typography
                variant="p"
                paragraph={true}
                className={classes.overview}
              >
                {overview}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h5" paragraph={true}>
                {mediaData.first_air_date.slice(0, 4)} ~{" "}
                {mediaData.next_episode_to_air
                  ? `next episode: ${mediaData.next_episode_to_air.air_date
                      .split("-")
                      .reverse()
                      .join("/")}`
                  : mediaData.last_air_date.slice(0, 4)}
              </Typography>
              <Typography variant="h5" paragraph={true}>
                Seasons: {mediaData.number_of_seasons}
              </Typography>
              <Typography variant="h5" paragraph={true}>
                Total Episodes: {mediaData.number_of_episodes}
              </Typography>
              <Typography variant="h5" paragraph={true}>
                Runtime per episode:{" "}
                {formatRuntime(mediaData.episode_run_time[0])}
              </Typography>
              <Typography
                variant="p"
                paragraph={true}
                className={classes.overview}
              >
                {overview}
              </Typography>
            </>
          )}
        </Grid>
        {!makeVideoUrlArr(videos).length ? (
          ""
        ) : (
          <Grid item lg={3} md={4} sm={12} className={classes.gridItem}>
            <Typography variant="h2" style={{ textAlign: "center" }}>
              Trailers
            </Typography>
            {makeVideoUrlArr(videos)
              .splice(0, 2)
              .map((url, index) => (
                <ReactPlayer
                  className={classes.videPlayer}
                  controls
                  width="100%"
                  height={smallBp ? "13rem" : "40%"}
                  key={index}
                  url={url}
                />
              ))}
          </Grid>
        )}
      </Grid>
    </div>
  );
}
