import React from "react";

export default function MovieCard({ title, poster_path }) {
  const movieImage = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  // const movieName = title || name || original_title;

  return (
    <div
      style={{
        width: 270,
        height: 500,
        // border: "solid 1px #fff",
        marginRight: "50px",
        marginBottom: "50px",
      }}
    >
      <img src={movieImage} alt="" width="270px" height="400px" />
      <article>
        <h2>{title}</h2>
        <h3>Genre</h3>
      </article>
    </div>
  );
}
