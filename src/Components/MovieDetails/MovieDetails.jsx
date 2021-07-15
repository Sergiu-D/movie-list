import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

// Utils
import formatRuntime from "../../Utils/formatRuntime";
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import addingMediaType from "../../Utils/addingMediaType";

// Components
import { WatchListBtn } from "../Buttons";
import Credits from "./Credits";
import SimilarTitles from "./RecommendedTitles";
import Trailers from "./Trailers";

//Material-ui
import { makeStyles, Typography, Grid, Tabs, Tab } from "@material-ui/core";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";

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
    minHeight: "7rem",
    marginTop: "auto",
    marginRight: "2rem",
    lineHeight: 1.8,
    // columnWidth: "30rem",
    columnCount: 2,
    columnFill: "auto",
    // columnRule: "1px inset white",
    columnGap: "5ch",

    [theme.breakpoints.down("md")]: {
      columnCount: 1,
      marginRight: 0,
    },
  },

  tabs: {
    marginBottom: "1rem",
    "& .MuiTabs-flexContainer": {
      flexDirection: "row",
    },
  },
  tab: {
    color: "white",
    fontSize: ".9rem",
    fontWeight: "800",
    backgroundColor: "hsla(0,100%,100%, .3)",
    marginRight: ".5rem",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
}));

export default function MovieDetails() {
  const classes = useStyles();

  // Get search params
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const id = JSON.parse(searchParams.get("id"));

  const mediaType = searchParams.get("media_type");

  // Tabs Values
  const [tabsValue, setTabsValue] = useState(0);

  // Fetching media details
  const { data: mediaData, error: mediaError } = useSWR(
    fetchingQuery(`${mediaType}/${id}`),
    fetcher
  );

  if (!mediaData)
    return (
      <PuffLoader color="RGB(240, 5, 75)" css={"margin: 0 auto;"} size={100} />
    );
  if (mediaError) return console.log(mediaError);

  const { overview, backdrop_path, release_date, runtime, genres } = mediaData;
  const title = mediaData.title || mediaData.name;

  const modifiedMediaData = addingMediaType([mediaData], mediaType);

  // Change document title
  document.title = title;

  const movieBg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  const reverseReleaseDate = (date) => {
    const reversedDate = date.split("-").slice(0, 1).reverse().join(" ");
    return reversedDate;
  };

  const tabsComponents = [
    <Credits id={id} mediaType={mediaType} />,
    <SimilarTitles id={id} mediaType={mediaType} />,
  ];

  // Handle tabs
  const handleTabs = (e, tab) => {
    // e.preventDefault();
    setTabsValue(tab);
  };

  return (
    <>
      <div
        style={{
          minHeight: "94vh",
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
                <Typography variant="h6" className={classes.overview}>
                  {overview}
                </Typography>
              </>
            )}
          </Grid>
          <Trailers id={id} mediaType={mediaType} />
        </Grid>
      </div>
      <Tabs
        className={classes.tabs}
        value={tabsValue}
        onChange={handleTabs}
        indicatorColor="secondary"
        textColor="secondary"
        // orientation="vertical"
        // centered
      >
        <Tab label="Cast" className={classes.tab} />

        <Tab label="Recommended" className={classes.tab} />
      </Tabs>
      {tabsComponents[tabsValue]}
    </>
  );
}
