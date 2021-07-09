import React from "react";

// Utils
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";

// Components
import MovieList from "../Layout/MovieList";
import PageTitle from "../PageTitle";

//Material-Ui
import CircularProgress from "@material-ui/core/CircularProgress";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";

const override = css`
  color: white;
  margin: auto;
`;

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
  if (!moviesData || !showsData)
    return <PuffLoader color="RGB(240, 5, 75)" css={override} size={100} />;
  if (moviesError || showsError)
    return <h1 style={{ margin: "auto" }}>Error!</h1>;

  return (
    <>
      <PageTitle pageTitle="Trending" />

      <MovieList data={moviesData.results} sectionTitle={"Movies"} />
      <MovieList data={showsData.results} sectionTitle={"Tv Shows"} />
    </>
  );
}
