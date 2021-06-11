import React from "react";

// Utils
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import useSWR from "swr";

// Components
import MovieList from "../MovieList";

//Material-Ui
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Trending() {
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

  if (!moviesData || !showsData) return <CircularProgress color="secondary" />;
  if (moviesError || showsError) return <h1>Error!</h1>;

  console.log(
    "🚀 ~ file: Trending.jsx ~ line 22 ~ Trending ~ showsData",
    showsData.results
  );
  return (
    <div style={{ minWidth: "82.5vw" }}>
      {/* <PageHeader title={"Trending"} /> */}

      <MovieList data={moviesData.results} sectionTitle={"Movies"} />
      <MovieList data={showsData.results} sectionTitle={"Tv Shows"} />
    </div>
  );
}
