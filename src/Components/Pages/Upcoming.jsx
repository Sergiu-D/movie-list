import React from "react";

// Components
import MoviePagination from "../MoviePagination";
import addingMediaType from "../../Utils/addingMediaType";
import PageTitle from "../PageTitle";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";

// Material-Ui
import { Grid } from "@material-ui/core";

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

  // function allPages() {
  //   let allPageUrl = [];
  //   for (let i = 1; i <= 15; i++) {
  //     allPageUrl.push(`${fetchingQuery(moviesQuery)}&page=${i}`);
  //   }
  //   console.log(
  //     "🚀 ~ file: Upcoming.jsx ~ line 22 ~ allPages ~ allPageUrl",
  //     allPageUrl
  //   );
  //   return allPageUrl;
  // }

  // allPages().forEach((url) => {
  //   const { data: moviesData, error: moviesError } = useSWR(url, fetcher);
  //   return moviesData, moviesError;
  // });

  // const { data: moviesData, error: moviesError } = useSWR(
  //   allPages().forEach((url) => `${url}`),
  //   fetcher
  // );

  if (!moviesData) return <h1>Loading...</h1>;
  if (moviesError) return <h1 style={{ color: "red" }}>Error!</h1>;

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

  // const modifiedMovieData = addingMediaType(filteringDates(), "movie");
  // console.log(
  //   "🚀 ~ file: Upcoming.jsx ~ line 77 ~ Upcoming ~ modifiedMovieData",
  //   modifiedMovieData
  // );

  // console.log("filteringDates(): ", filteringDates());
  return (
    <div>
      <PageTitle pageTitle="Upcoming" />
      <MoviePagination
        media={filteringDates()}
        setSize={setSize}
        isValidating={isValidating}
      />
      {/* <Grid container>
        {filteringDates().map((movie, index) =>
          movie[index].map((mov) => <MovieCard movie={mov} key={movie.id} />)
        )}
      </Grid> */}
    </div>
  );
}
