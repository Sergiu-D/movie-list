import React from "react";

// Util
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import addingMediaType from "../../Utils/addingMediaType";

// Components
import Cinema from "../Cinema";
import MovieList from "../Layout/MovieList";
import PageTitle from "../PageTitle";

//Material-Ui
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Newest() {
  // Change document title
  document.title = "Newest";

  // Fetching data
  const moviesQuery = `movie/now_playing`;
  const showsQuery = `tv/airing_today`;

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

  // Creating new object and adding media type
  const modifiedMovieData = addingMediaType(moviesData.results, "movie");
  const modifiedShowsData = addingMediaType(showsData.results, "tv");

  return (
    <>
      <PageTitle pageTitle={Newest} />
      {/* <Cinema /> */}
      <MovieList data={modifiedMovieData} sectionTitle={"New Movies"} />
      <MovieList data={modifiedShowsData} sectionTitle={"Tv Airing Today"} />
    </>
  );
}
