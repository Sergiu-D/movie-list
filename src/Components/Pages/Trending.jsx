import React from "react";

// Utils
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";

// Components
import MovieList from "../Layout/MovieList";
import PageTitle from "../PageTitle";

//Material-Ui
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Trending() {
  // Change document title
  document.title = "Trending";

  // Fetching data
  const moviesQuery = `trending/movie/day`;
  const showsQuery = `trending/tv/day`;

  const { data: moviesData, error: moviesError } = useSWR(
    fetchingQuery(moviesQuery),
    fetcher
  );
  const { data: showsData, error: showsError } = useSWR(
    fetchingQuery(showsQuery),
    fetcher
  );

  // Error handle
  if (!moviesData || !showsData) return <CircularProgress color="secondary" />;
  if (moviesError || showsError) return <h1>Error!</h1>;

  return (
    <>
      <PageTitle pageTitle="Trending" />

      <MovieList data={moviesData.results} sectionTitle={"Movies"} />
      <MovieList data={showsData.results} sectionTitle={"Tv Shows"} />
    </>
  );
}
