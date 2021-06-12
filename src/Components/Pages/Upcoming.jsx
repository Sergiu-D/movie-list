import React from "react";

// Components
import MoviePagination from "../MoviePagination";
import MovieCard from "../MovieCard/MovieCard";

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
  console.log("Seize: ", size);
  // const maximMovies =
  //   filteringDates().length !== 20 && setSize((prev) => prev + 3);
  // console.log(
  //   "🚀 ~ file: Upcoming.jsx ~ line 73 ~ Upcoming ~ maximMovies",
  //   maximMovies
  // );
  // if (filteringDates().length < filteringDates().length + 20)
  //   return setSize((prev) => prev + 1);
  console.log(
    "🚀 ~ file: Upcoming.jsx ~ line 82 ~ Upcoming ~ filteringDates()",
    filteringDates()
  );
  return (
    <div>
      <h2>Upcoming Page</h2>
      <MoviePagination
        movies={filteringDates()}
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
