import React, { useState, useEffect } from "react";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";

// Components
import MoviePagination from "../MoviePagination";

//Material-Ui
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Discover() {
  // const [movies, setMovies] = useState([]);
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

  if (!moviesData) return <CircularProgress color="secondary" />;
  if (moviesError) return <h1>Error!</h1>;

  const movies = [];

  [...moviesData].forEach((element, index) => {
    movies.push(...mutateFetchedData(element.results, "movie"));
  });

  console.log("🚀 ~ file: Discover.jsx ~ line 35 ~ Discover ~ movies", movies);
  // Mutate data API, injecting "media type"
  function mutateFetchedData(data, mediaType) {
    let modifiedDataObj = [];

    //Injecting property
    data.forEach((movie) => {
      modifiedDataObj.push(
        Object.assign({}, movie, {
          media_type: `${mediaType}`,
        })
      );
    });

    return modifiedDataObj;
  }

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
