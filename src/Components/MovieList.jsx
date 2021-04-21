import React, { useState } from "react";

// Components
import MovieCard from "./MovieCard/MovieCard";

// Material-Ui
import { Grid } from "@material-ui/core";

export default function MovieList({ data, sectionTitle }) {
  const [allMovies, setAllMovies] = useState(false);

  const handleBtn = () => {
    setAllMovies(!allMovies);
    console.log("allMovies", allMovies);
  };

  return (
    <section style={{ paddingRight: ".2rem", paddingTop: "1rem" }}>
      <h1>{sectionTitle}</h1>
      <Grid container spacing={3} justify="flex-start">
        {allMovies
          ? data.map((title, index) => {
              const movieName = title.title || title.name;
              return (
                <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                  <MovieCard
                    title={movieName}
                    poster_path={title.poster_path}
                    key={index}
                  />
                </Grid>
              );
            })
          : data
              .map((title, index) => {
                const movieName = title.title || title.name;
                return (
                  <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                    <MovieCard
                      title={movieName}
                      poster_path={title.poster_path}
                      key={index}
                    />
                  </Grid>
                );
              })
              .splice(0, 6)}
      </Grid>
      <button onClick={() => handleBtn()}>
        {allMovies ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}
