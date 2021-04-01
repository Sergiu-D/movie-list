import React, { useState, useEffect } from "react";

// Utils
import axios from "axios";
import useSWRInfinite from "swr";
import fetcher from "../../Utils/fetcher";

// Components
import MoviePagination from "../MoviePagination";

export default function Discover() {
  const [pageNum, setPageNum] = useState(1);
  const [movies, setMovies] = useState([]);
  // const movies = useRef([]);

  const {
    data,
    error,
    isValidating,
    mutate,
    size = 20,
    setSize,
  } = useSWRInfinite(
    (index) =>
      `https://api.themoviedb.org/3/discover/movie?api_key=cd001a6467f4a6dd11d1fcd4ae1044a7&page=${
        index + 1
      }`,
    getKey,
    fetcher
  );

  if (error) return <h1>Error</h1>;
  if (!data) return <h1>Loading...</h1>;

  console.log("Is Validating", isValidating);
  console.log("Get Key", getKey);
  console.log("Size", size);
  console.log("swr data", data);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: ,
  //     params: { page: pageNum },
  //   }).then((res) => setMovies([...movies, ...res.data.results]));
  // }, [pageNum]);

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
