import React, { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";

export default function MovieList({ data }) {
  const movieTitle = [
    "Agengers",
    "The white book",
    "Into the code",
    "Letting go",
    "Midnight sunset",
    "Letting go",
    "The white book",
    "Into the code",
    "Letting go",
    "Midnight sunset",
    "Agengers",
    "The white book",
    "Into the code",
    "Letting go",
    "Midnight sunset",
    "Letting go",
    "The white book",
    "Into the code",
    "Letting go",
    "Midnight sunset",
  ];

  const [allMovies, setAllMovies] = useState(false);

  // const movieImage = `https://image.tmdb.org/t/p/w300/${data.poster_path}`;

  const handleBtn = () => {
    setAllMovies(!allMovies);
    console.log(allMovies);
  };

  return (
    <>
      <h1 style={{ display: "block", margin: "0 auto" }}>{data.title}</h1>
      <div
        style={{
          display: "flex",
          width: "1620px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {allMovies
          ? movieTitle.map((title, index) => {
              return <MovieCard title={title} key={index} />;
            })
          : movieTitle
              .map((title, index) => {
                return <MovieCard title={title} key={index} />;
              })
              .splice(0, 5)}
      </div>
      <button onClick={() => handleBtn()}>
        {allMovies ? "Show Less" : "Show More"}
      </button>
    </>
  );
}
