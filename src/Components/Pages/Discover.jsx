import React, { useState, useEffect } from "react";

// Utils
import useSWR from "swr";

// Components
import MoviePagination from "../MoviePagination";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Discover() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/photos",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <h2>Discover Page</h2>
      <MoviePagination data={data} />
    </>
  );
}
