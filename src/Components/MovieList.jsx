import React, { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";

export default function MovieList({ data, sectionTitle }) {
  // const movieTitle = [
  //   "Agengers",
  //   "The white book",
  //   "Into the code",
  //   "Letting go",
  //   "Midnight sunset",
  //   "Letting go",
  //   "The white book",
  //   "Into the code",
  //   "Letting go",
  //   "Midnight sunset",
  //   "Agengers",
  //   "The white book",
  //   "Into the code",
  //   "Letting go",
  //   "Midnight sunset",
  //   "Letting go",
  //   "The white book",
  //   "Into the code",
  //   "Letting go",
  //   "Midnight sunset",
  // ];
  console.log("trending m", data);

  const [allMovies, setAllMovies] = useState(false);

  // const { title, poster_path } = data;

  // const movieImage = `https://image.tmdb.org/t/p/w300/${poster_path}`;

  const handleBtn = () => {
    setAllMovies(!allMovies);
    console.log("allMovies", allMovies);
  };

  return (
    <>
      <h1>{sectionTitle}</h1>
      <div
        style={{
          display: "flex",
          width: "1620px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {allMovies
          ? data.map((title, index) => {
              const movieName = title.title || title.name;
              return (
                <MovieCard
                  title={movieName}
                  poster_path={title.poster_path}
                  key={index}
                />
              );
            })
          : data
              .map((title, index) => {
                const movieName = title.title || title.name;
                return (
                  <MovieCard
                    title={movieName}
                    poster_path={title.poster_path}
                    key={index}
                  />
                );
              })
              .splice(0, 5)}
      </div>
      <button onClick={() => handleBtn()}>
        {allMovies ? "Show Less" : "Show More"}
      </button>
    </>
  );
}
