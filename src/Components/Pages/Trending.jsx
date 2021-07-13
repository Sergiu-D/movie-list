import React from "react";

// Components
import MovieList from "../Layout/MovieList/MovieList";

export default function Trending() {
  const moviesQuery = `trending/movie/day`;
  const showsQuery = `trending/tv/day`;
  const pageTitle = `Trending`;
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
