import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Components
import MovieCard from "../MovieCard/MovieCard";
import { GridContainer, GridItem } from "./Grid";

// Material-Ui
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(15, 1fr)",
  },
  container: {
    padding: "0 .5rem",
    paddingTop: "1rem",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  btn: {
    width: "15%",
    margin: "1.5rem auto",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: ".5rem 0",
    },
  },
}));

export default function MovieList({ data, sectionTitle, genres }) {
  const classes = useStyles();

  const history = useHistory();
  const searchedQuery = new URLSearchParams(history.location.search);

  const getQuery = searchedQuery.get("show_more");
  const stateObj = getQuery
    ? { value: getQuery, state: true }
    : { value: "", state: false };

  useEffect(() => {
    setShowAllMovies(stateObj);
  }, []);

  const [showAllMovies, setShowAllMovies] = useState({
    value: "",
    state: false,
  });

  const handleBtn = (event) => {
    const value = event.target.value;

    const location = history.location.pathname;

    const url = new URLSearchParams({
      show_more: value,
    });

    setShowAllMovies({ value: value, state: !showAllMovies.state });
    if (showAllMovies.state) {
      setShowAllMovies({ value: "", state: false });
      history.push(`${location}`);
    }
    if (!showAllMovies.state) {
      history.push(`${location}?${url}`);
    }
  };

  return (
    <section className={classes.container}>
      {/* TODO change h1 to typography */}
      <h1>{sectionTitle}</h1>
      <GridContainer>
        {showAllMovies.state && showAllMovies.value === data[0].media_type
          ? data.map((movie, index) => {
              return (
                <GridItem index={index}>
                  <MovieCard movie={movie} />
                </GridItem>
              );
            })
          : data
              .map((movie, index) => {
                return (
                  <GridItem index={index}>
                    <MovieCard movie={movie} />
                  </GridItem>
                );
              })
              .slice(0, 6)}
      </GridContainer>

      {/* TODO make btn responsive */}
      <button
        // component="button"
        // variant="contained"
        // color="secondary"
        value={data[0].media_type}
        className={classes.btn}
        onClick={(event) => handleBtn(event)}
      >
        {showAllMovies
          ? `Show Less ${data[0].media_type}`
          : `Show More ${data[0].media_type}`}
      </button>
    </section>
  );
}
