import React, { useState, useEffect } from "react";

import useSWR from "swr";
import fetcher from "../Utils/fetcher";

// Utils
import InfiniteScroll from "react-infinite-scroll-component";

// Components
import MovieCard from "./MovieCard/MovieCard";

// Material-Ui
import { Grid } from "@material-ui/core";

export default function MoviePagination({ movies, pageNum, setPageNum }) {
  const handleFetchMovies = () => setPageNum((prevPage) => prevPage + 1);

  return (
    <div>
      <InfiniteScroll
        style={{ paddingRight: ".2rem", paddingTop: "1rem" }}
        dataLength={movies.length} //This is important field to render the next data
        next={handleFetchMovies}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid container spacing={3} justify="flex-start">
          {movies.map((movie, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                <MovieCard {...movie} key={movie.id} />
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </div>
  );
}
