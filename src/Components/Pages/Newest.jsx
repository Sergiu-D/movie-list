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

// React toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
  if (!moviesData || !showsData)
    return <CircularProgress color="secondary" style={{ margin: "auto" }} />;
  if (moviesError || showsError)
    return <h1 style={{ margin: "auto" }}>Error!</h1>;

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
