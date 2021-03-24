import React, { useState, useEffect } from "react";

// Utils
import InfiniteScroll from "react-infinite-scroll-component";

// Components
import MovieCard from "./MovieCard/MovieCard";

export default function MoviePagination({ data, setPageIndex }) {
  // TODO Fixing scroll reload
  const { page, results } = data;
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setMovies([...movies, ...results]);
  }, [page]);

  const handelNextPage = () => {
    if (page >= 5) return setHasMore(false);

    setPageIndex((prev) => prev + 1);
  };

  console.log("movies", movies);
  return (
    <div>
      <InfiniteScroll
        style={{
          display: "flex",
          width: "1620px",
          justifyContent: "space-around",
          flexWrap: "wrap",
          overflowX: "hidden",
        }}
        dataLength={movies.length}
        next={handelNextPage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p style={{ textAlign: "center" }}>This is the end!</p>}
      >
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie.id} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
