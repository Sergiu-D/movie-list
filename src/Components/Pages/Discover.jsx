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
  // Change document title
  document.title = "Discover";

  // Fetching data
  const moviesQuery = `discover/movie`;
  const filterQuery = `sort_by=release_date.desc&include_adult=false&year=2015&primary_release_year=2010&with_genres=`;

  const {
    data: moviesData,
    error: moviesError,
    setSize,
  } = useSWRInfinite(
    (index) => `${fetchingQuery(moviesQuery)}&${filterQuery}&page=${index + 1}`,
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
        totalResults={moviesData[0].total_results}
      />
    </>
  );
}
