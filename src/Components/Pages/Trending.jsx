import React from "react";

import MovieList from "../MovieList";

export default function Trending() {
  return (
    <div>
      <h2>Trending page</h2>
      <MovieList title={"Movies"} />
      <MovieList title={"Tv Shows"} />
    </div>
  );
}
