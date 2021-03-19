import React from "react";

export default function MovieCard({ title }) {
  return (
    <div
      style={{
        width: 270,
        height: 500,
        border: "solid 1px #fff",
        marginBottom: "50px",
      }}
    >
      <img
        src="https://fakeimg.pl/270x400/"
        alt=""
        width="270px"
        height="400px"
      />
      <article>
        <h2>{title}</h2>
        <h3>Genre</h3>
      </article>
    </div>
  );
}
