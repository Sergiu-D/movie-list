import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Components
import MovieCard from "../../MovieCard/MovieCard";
import { GridContainer, GridItem } from "../Grid";

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

// TODO show more for both media types

export default function MovieList({
  data,
  sectionTitle,
  getShowMore,
  setGetShowMore,
}) {
  const classes = useStyles();

  const mediaType = data[0].media_type;

  const handleBtn = (event) => {
    const value = event.target.value;

    if (!getShowMore.includes(value)) {
      return setGetShowMore((prev) => [...new Set([...prev, value])]);
    }
    return setGetShowMore((prev) => prev.filter((val) => val !== value));
  };

  return (
    <section className={classes.container}>
      {/* TODO change h1 to typography */}
      <h1>{sectionTitle}</h1>

      <GridContainer>
        {getShowMore.includes(mediaType)
          ? data.map((movie) => {
              return (
                <GridItem key={movie.id}>
                  <MovieCard movie={movie} />
                </GridItem>
              );
            })
          : data
              .map((movie) => {
                return (
                  <GridItem key={movie.id}>
                    <MovieCard movie={movie} />
                  </GridItem>
                );
              })
              .slice(0, 6)}
      </GridContainer>

      {/* TODO make btn responsive */}
      <button
        value={mediaType}
        className={classes.btn}
        onClick={(event) => handleBtn(event)}
      >
        {getShowMore.includes(mediaType)
          ? `Show less ${mediaType === "movie" ? "Movies" : "Tv shows"}`
          : `Show more ${mediaType === "movie" ? "Movies" : "Tv shows"}`}
      </button>
    </section>
  );
}
