import React from "react";

// Util
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
// import fetcher from "../../Utils/fetcher";
import useSWR from "swr";

// Components
import Cinema from "../Cinema";
import MovieList from "../MovieList";

//Material-Ui
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Newest() {
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

  if (!moviesData || !showsData) return <CircularProgress color="secondary" />;
  if (moviesError || showsError) return <h1>Error!</h1>;

  return (
    <div>
      <h2>Newest Page</h2>
      <Cinema />
      <MovieList data={moviesData.results} sectionTitle={"New Movies"} />
      <MovieList data={showsData.results} sectionTitle={"Tv Airing Today"} />
    </div>
  );
}
