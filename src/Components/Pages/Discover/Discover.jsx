import React, { useState } from "react";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../../Utils/fetchingQuery";
import addingMediaType from "../../../Utils/addingMediaType";

// Components
import MoviePagination from "../../MoviePagination";
import Filters from "./Filters";

//Material-Ui
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Discover() {
  // Change document title
  document.title = "Discover";

  const [isMovies, setIsMovies] = useState(true);
  const [sorting, setSorting] = useState("popularity.desc");
  const [voteAverage, setVoteAverage] = useState(10);

  // Fetching data

  let mediaQuery, filterQuery;

  if (isMovies) {
    mediaQuery = `discover/movie`;
    filterQuery = `sort_by=${sorting}&vote_average.lte=${voteAverage}&include_adult=false&year=&primary_release_year=&with_genres=`;
  }

  if (!isMovies) {
    mediaQuery = `discover/tv`;
    filterQuery = `sort_by=${sorting}&vote_average.lte=${voteAverage}&include_adult=false&year=&primary_release_year=&with_genres=`;
  }

  const { data, error, setSize } = useSWRInfinite(
    (index) => `${fetchingQuery(mediaQuery)}&${filterQuery}&page=${index + 1}`,
    fetcher
  );

  // Error handle
  if (!data) return <CircularProgress color="secondary" />;
  if (error) return <h1>Error!</h1>;
  console.log("🚀 ~ file: Discover.jsx ~ line 38 ~ Discover ~ data", data);

  // Mutate data API, injecting "media type"

  const movies = [];
  const tvShows = [];

  if (isMovies) {
    [...data].forEach((element) => {
      movies.push(...addingMediaType(element.results, "movie"));
    });
  }

  if (!isMovies) {
    [...data].forEach((element) => {
      tvShows.push(...addingMediaType(element.results, "tv"));
    });
  }

  return (
    <>
      <h2>Discover Page</h2>
      <Filters
        isMovies={isMovies}
        setIsMovies={setIsMovies}
        sorting={sorting}
        setSorting={setSorting}
        voteAverage={voteAverage}
        setVoteAverage={setVoteAverage}
      />
      <MoviePagination
        media={isMovies ? movies : tvShows}
        setSize={setSize}
        totalResults={data[0].total_results}
      />
    </>
  );
}
