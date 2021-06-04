import React, { useState, useEffect } from "react";

// Components
import MovieCard from "./MovieCard/MovieCard";

// Material-Ui
import { makeStyles, Grid, Button } from "@material-ui/core";

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
    width: "10%",
    margin: "0 auto",
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
      <Grid container spacing={3} justify="flex-start">
        {showAllMovies
          ? data.map((movie, index) => {
              // const movieName = movie.movie || movie.name;
              return (
                <Grid item xs={4} sm={3} md={3} lg={2} key={index}>
                  <MovieCard
                    // movie={movieName}
                    movie={movie}
                    key={index}
                  />
                </Grid>
              );
            })
          : data
              .map((movie, index) => {
                // const movieName = movie.movie || movie.name;
                // trending/:type/:id/:movie
                return (
                  <Grid item xs={4} sm={3} md={3} lg={2} key={index}>
                    <MovieCard
                      // movie={movieName}
                      // genres={genres}
                      movie={movie}
                      key={index}
                    />
                  </Grid>
                );
              })
              .slice(0, 6)}
      </Grid>

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
