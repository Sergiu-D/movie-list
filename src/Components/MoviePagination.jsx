import React, { useState, useEffect } from "react";

import useInfiniteScroll from "react-infinite-scroll-hook";

// Utils
import InfiniteScroll from "react-infinite-scroll-component";

// Components
import MovieCard from "./MovieCard/MovieCard";

export default function MoviePagination({ data }) {
  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = useState();

  // const [loading, setLoading] = useState(false);
  // const [hasNextPage, setHasNextPage] = useState(1);

  function handleLoadMore() {
    setLoading(true);
    // Some API call to fetch the next page
    loadNextPage(endCursor, pageSize).then((newPage) => {
      setLoading(false);
      setHasNextPage(newPage.hasNextPage);
      setItems([...items, newPage.items]);
    });
  }

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: handleLoadMore,
    scrollContainer,
  });

  return (
    <div ref={infiniteRef}>
      {data.results.map((movie) => (
        <MovieCard {...movie} key={data.id} />
      ))}
    </div>
  );
}
