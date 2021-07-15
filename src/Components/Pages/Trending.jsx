import React from "react";

// Components
import ContentList from "../Layout/ContentList/ContentList";

export default function Trending() {
  const moviesQuery = `trending/movie/day`;
  const showsQuery = `trending/tv/day`;
  const pageTitle = `Trending`;
  return (
    <>
      <ContentList
        moviesQuery={moviesQuery}
        showsQuery={showsQuery}
        pageTitle={pageTitle}
      />
    </>
  );
}
