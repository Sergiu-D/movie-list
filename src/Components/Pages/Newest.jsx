import React from "react";

// Components
import Cinema from "../Cinema";
import MovieList from "../MovieList";

export default function Newest() {
  return (
    <div>
      <h2>Newest Page</h2>
      <Cinema />
      <MovieList title={"Movies"} />
      <MovieList title={"Tv Shows"} />
    </div>
  );
}
