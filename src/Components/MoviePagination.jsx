import React from "react";

// Components
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard/MovieCard";

// Material-Ui
import { Grid, CircularProgress } from "@material-ui/core";

// TODO add "back to top button"

export default function MoviePagination({
  movies,
  pageNum,
  setSize,
  isValidating,
}) {
  const handleFetchMovies = () => setSize((prev) => prev + 2);

  return (
    <div>
      <InfiniteScroll
        style={{ paddingRight: "1rem", paddingTop: "1rem" }}
        dataLength={movies.length}
        next={handleFetchMovies}
        hasMore={true}
        loader={
          <h3 style={{ textAlign: "center", padding: "2rem 0" }}>Loading...</h3>
        }
        endMessage={
          <p style={{ textAlign: "center", padding: "2rem 0" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid container spacing={3} justify="flex-start">
          {movies.map((movie, index) => {
            if (!movie.release_date) return;

            return (
              <Grid item xs={4} sm={3} md={3} lg={2} key={index}>
                <MovieCard movie={movie} key={movie.id} />
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </div>
  );
}
