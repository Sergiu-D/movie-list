import React from "react";

// Components
import ContentPagination from "../Layout/ContentPagination";

import PageTitle from "../PageTitle";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import addingMediaType from "../../Utils/addingMediaType";

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
    (index) => `${fetchingQuery(moviesQuery)}&region=US&page=${index + 1}`,
    fetcher
  );

  if (!moviesData)
    return <PuffLoader color="RGB(240, 5, 75)" css={override} size={100} />;
  if (moviesError)
    return <h1 style={{ margin: "auto", color: "red" }}>Error!</h1>;

  const totalResults = moviesData[0].total_results;
  // function filteringDates() {
  //   const newMovies = [];

  //   // const minimumDateMovie = Date.parse(moviesData[0].dates.minimum);

  //   moviesData.forEach((obj) =>
  //     obj.results.forEach(
  //       (movie) =>
  //         minimumDateMovie < Date.parse(movie.release_date) &&
  //         newMovies.push(movie)
  //     )
  //   );

  //   if (size < 15) return setSize((prev) => prev + 1);

  //   return newMovies;
  // }
  const movies = [];

  moviesData.forEach((element) =>
    movies.push(...addingMediaType(element.results, "movie"))
  );

  return (
    <div>
      <PageTitle pageTitle="Upcoming" />
      <ContentPagination
        media={movies}
        setSize={setSize}
        totalResults={totalResults}
      />
    </div>
  );
}
