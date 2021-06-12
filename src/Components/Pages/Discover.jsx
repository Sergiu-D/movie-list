import React, { useState, useEffect } from "react";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import addingMediaType from "../../Utils/addingMediaType";

// Components
import MoviePagination from "../MoviePagination";

//Material-Ui
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Discover() {
  // Fetching data
  const moviesQuery = `discover/movie`;

  const {
    data: moviesData,
    error: moviesError,
    isValidating,
    mutate,
    size,
    setSize,
  } = useSWRInfinite(
    (index) => `${fetchingQuery(moviesQuery)}&page=${index + 1}`,
    fetcher
  );

  // Error handle
  if (!moviesData) return <CircularProgress color="secondary" />;
  if (moviesError) return <h1>Error!</h1>;

  // Mutate data API, injecting "media type"
  const movies = [];

  [...moviesData].forEach((element) => {
    movies.push(...addingMediaType(element.results, "movie"));
  });

  return (
    <>
      <h2>Discover Page</h2>
      <MoviePagination
        movies={movies}
        setSize={setSize}
        isValidating={isValidating}
      />
    </>
  );
}
