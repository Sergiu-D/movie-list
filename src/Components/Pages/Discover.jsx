import React, { useState, useEffect } from "react";

// Utils
import axios from "axios";

// Components
import MoviePagination from "../MoviePagination";

export default function Discover() {
  const [pageNum, setPageNum] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=cd001a6467f4a6dd11d1fcd4ae1044a7`,
      params: { page: pageNum },
    }).then((res) => setMovies([...movies, ...res.data.results]));
  }, [pageNum]);

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
