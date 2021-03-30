import React, { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";

export default function MovieList({ data, sectionTitle }) {
  const [allMovies, setAllMovies] = useState(false);

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
