import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

// Utils

// Components
import MovieCard from "./MovieCard/MovieCard";

export default function MoviePagination({ movies, pageNum, setPageNum }) {
  const [hasMore, setHasMore] = useState(true);

  const handleFetchMovies = () => setPageNum((prev) => prev + 1);

  // if (pageNum >= 5) return setHasMore(false);
  console.log("Data", movies);
  return (
    <div>
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={handleFetchMovies}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {movies.map((movie) => (
          <ul key={movie.id}>
            <li style={{ margin: "50px 0" }}>{movie.title}</li>
          </ul>
        ))}
      </InfiniteScroll>
    </div>
  );
}
