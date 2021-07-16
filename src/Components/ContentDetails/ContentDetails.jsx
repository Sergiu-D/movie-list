import React, { useState } from "react";

import { useHistory } from "react-router-dom";

// Utils
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import addingMediaType from "../../Utils/addingMediaType";

// Components
import { WatchListBtn } from "../Buttons";
import Credits from "./Components/Credits";
import SimilarTitles from "./Components/RecommendedTitles";
import Trailers from "./Components/Trailers";
import Background from "./Components/Background";
import TvShowsDetails from "./Components/TvShowsDetails";
import MovieDetails from "./Components/MovieDetails";

//Material-ui
import { makeStyles, Typography, Grid, Tabs, Tab } from "@material-ui/core";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "94vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
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
    columnCount: 2,
    columnFill: "auto",
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

export default function ContentDetails() {
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
      <div style={{ display: "flex", height: "100vh", width: "100%" }}>
        <PuffLoader color="RGB(240, 5, 75)" css={"margin: auto;"} size={100} />
      </div>
    );
  if (mediaError) return <h2>Fetching media data error!</h2>;

  const { backdrop_path, genres } = mediaData;
  console.log(
    "🚀 ~ file: ContentDetails.jsx ~ line 126 ~ ContentDetails ~ mediaData",
    mediaData
  );
  const title = mediaData.title || mediaData.name;

  const modifiedMediaData = addingMediaType([mediaData], mediaType);

  // Change document title
  document.title = title;

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
      <div className={classes.wrapper}>
        <Background backdropPath={backdrop_path} title={title} />

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
              <MovieDetails mediaData={mediaData} useStyles={useStyles} />
            ) : (
              <TvShowsDetails mediaData={mediaData} useStyles={useStyles} />
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
      >
        <Tab label="Cast" className={classes.tab} />

        <Tab label="Recommended" className={classes.tab} />
      </Tabs>
      {tabsComponents[tabsValue]}
    </>
  );
}
