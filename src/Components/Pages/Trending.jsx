import React from "react";

// Components
import PageHeader from "../PageHeader";
import MovieList from "../MovieList";

export default function Trending() {
  return (
    <div>
      <PageHeader title={"Trending"} />
      <div style={{ overflow: "scroll" }}>
        <MovieList title={"Movies"} />
        <MovieList title={"Tv Shows"} />
      </div>
    </div>
  );
}
