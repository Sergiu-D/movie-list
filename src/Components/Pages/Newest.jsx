import React from "react";

// Components
import ContentList from "../Layout/ContentList/ContentList";

export default function Newest() {
  const moviesQuery = `movie/now_playing`;
  const showsQuery = `tv/airing_today`;
  const pageTitle = `Newest`;

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
