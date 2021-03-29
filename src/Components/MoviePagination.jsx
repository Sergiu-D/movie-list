import React, { useState, useEffect } from "react";

import useSWR from "swr";
import fetcher from "../Utils/fetcher";

// Utils
import InfiniteScroll from "react-infinite-scroll-component";

// Components
import MovieCard from "./MovieCard/MovieCard";

export default function MoviePagination({ movies, pageNum, setPageNum }) {
  const handleFetchMovies = () => setPageNum((prevPage) => prevPage + 1);

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
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie.id} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
