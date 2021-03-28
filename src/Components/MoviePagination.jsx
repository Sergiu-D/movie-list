import React, { useState, useEffect } from "react";

import useSWR from "swr";
import fetcher from "../Utils/fetcher";

// Utils
import InfiniteScroll from "react-infinite-scroll-component";

// Components
import MovieCard from "./MovieCard/MovieCard";

export default function MoviePagination() {
  // TODO Fixing scroll reload

  // const { page, results } = data;

  // const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&&page=${pageIndex}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  // useEffect(() => {
  //   console.log("effect here!");
  //   setMovies([...movies, ...results]);
  // }, [page]);
  const { results, page } = data;

  const handelNextPage = () => {
    if (page >= 5) return setHasMore(false);

    setPageIndex((prev) => prev + 1);
  };

  return (
    <div id="scrollableDiv" style={{ height: 1000, overflow: "auto" }}>
      <InfiniteScroll
        style={{
          display: "flex",
          width: "1620px",
          justifyContent: "space-around",
          flexWrap: "wrap",
          overflowX: "hidden",
        }}
        dataLength={results.length}
        next={handelNextPage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
        endMessage={<p style={{ textAlign: "center" }}>This is the end!</p>}
      >
        {results.map((movie) => {
          return <MovieCard {...movie} key={data.id} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
