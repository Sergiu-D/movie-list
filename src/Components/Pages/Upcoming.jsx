import React from "react";

// Components
import MoviePagination from "../Layout/MoviePagination";
import addingMediaType from "../../Utils/addingMediaType";
import PageTitle from "../PageTitle";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";

const override = css`
  color: white;
  margin: auto;
`;

export default function Upcoming() {
  // Change document title
  document.title = "Upcoming";

  // Fetching data
  const moviesQuery = `movie/upcoming`;

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

  if (!moviesData)
    return <PuffLoader color="RGB(240, 5, 75)" css={override} size={100} />;
  if (moviesError)
    return <h1 style={{ margin: "auto", color: "red" }}>Error!</h1>;

  function filteringDates() {
    const newMovies = [];

    const minimumDateMovie = Date.parse(moviesData[0].dates.minimum);

    moviesData.forEach((obj) =>
      obj.results.forEach(
        (movie) =>
          minimumDateMovie < Date.parse(movie.release_date) &&
          newMovies.push(movie)
      )
    );

    if (size < 15) return setSize((prev) => prev + 1);

    return newMovies;
  }

  return (
    <div>
      <PageTitle pageTitle="Upcoming" />
      <MoviePagination
        media={filteringDates()}
        setSize={setSize}
        isValidating={isValidating}
      />
    </div>
  );
}
