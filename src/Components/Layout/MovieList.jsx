import React, { useState } from "react";

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
  const [showAllMovies, setShowAllMovies] = useState(false);

  const handleBtn = () => {
    setShowAllMovies(!showAllMovies);
  };

  return (
    <section className={classes.container}>
      {/* TODO change h1 to typography */}
      <h1>{sectionTitle}</h1>
      <GridContainer>
        {showAllMovies
          ? data.map((movie, index) => {
              return (
                <GridItem>
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
      <Button
        variant="outlined"
        color="secondary"
        className={classes.btn}
        onClick={() => handleBtn()}
      >
        {showAllMovies ? "Show Less" : "Show More"}
      </Button>
    </section>
  );
}
