import React, { useState, useEffect } from "react";

// Utils
import axios from "axios";

// Components
import MoviePagination from "../MoviePagination";

export default function Discover() {
  const [pageNum, setPageNum] = useState(1);
  const [movies, setMovies] = useState([]);
  // const movies = useRef([]);

  // const { data, error } = useSWR(
  //   `https://api.themoviedb.org/3/discover/movie?api_key=cd001a6467f4a6dd11d1fcd4ae1044a7&&page=${pageNum}`,
  //   fetcher
  // );
  // if (error) return <h2>Error...</h2>;
  // if (!data) return <h2>Loading...</h2>;

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
        setPageNum={setPageNum}
        pageNum={pageNum}
      />
    </>
  );
}
