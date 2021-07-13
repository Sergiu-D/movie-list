import React from "react";

// Components
import MovieList from "../Layout/MovieList/MovieList";

export default function Newest() {
  const moviesQuery = `movie/now_playing`;
  const showsQuery = `tv/airing_today`;
  const pageTitle = `Newest`;

  return (
    <>
      <MovieList
        moviesQuery={moviesQuery}
        showsQuery={showsQuery}
        pageTitle={pageTitle}
      />
    </>
  );
}
