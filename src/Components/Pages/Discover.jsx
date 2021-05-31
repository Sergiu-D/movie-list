import React, { useState, useEffect } from "react";

// Utils
import axios from "axios";

// Components
import MoviePagination from "../MoviePagination";

export default function Discover() {
  const [pageNum, setPageNum] = useState(1);
  const [moviesFetchedData, setMoviesFetchData] = useState([]);

  const [movies, setMovies] = useState([]);

  // Fetching data.
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`,
      params: { page: pageNum },
    }).then((res) =>
      setMoviesFetchData((prev) => [...prev, ...res.data.results])
    );
  }, [pageNum]);

  // Modifying fetched data, adding "media_type".
  useEffect(() => {
    moviesFetchedData.forEach((movie) =>
      setMovies((prev) => [
        ...prev,
        Object.assign({}, movie, { media_type: "movie" }),
      ])
    );
  }, [moviesFetchedData]);

  return (
    <>
      <h2>Discover Page</h2>
      <MoviePagination
        movies={movies}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </>
  );
}
