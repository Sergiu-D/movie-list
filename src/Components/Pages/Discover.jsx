import React, { useState, useEffect } from "react";

// Utils
import { useSWRInfinite } from "swr";
import fetcher from "../../Utils/fetcher";

import axios from "axios";

// Components
import MoviePagination from "../MoviePagination";

export default function Discover() {
  const [pageNum, setPageNum] = useState(1);
  const [moviesFetchedData, setMoviesFetchData] = useState([]);

  // const [movies, setMovies] = useState([]);

  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) =>
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&page=${index + 1}`,
    fetcher
  );

  if (!data) return <h1>Loading...</h1>;

  // console.log("🚀 ~ file: Discover.jsx ~ line 28 ~ Discover ~ data", data);
  const movies = [];

  [...data].forEach((element, index) => {
    movies.push(...mutateFetchedData(element.results, "movie"));
  });

  console.log(
    "🚀 ~ file: Discover.jsx ~ line 36 ~ Discover ~ isValidating",
    isValidating
  );
  // useEffect(() => {
  //   setMovies((prev) => [...prev, ...data[0].results]);
  // }, [data]);
  // Fetching movies data.

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`,
  //     params: { page: pageNum },
  //   }).then((res) => setMoviesFetchData([...res.data.results]));
  // }, [pageNum]);

  // Setting mutated data into state.

  // SWR fetching

  // const getKey = (pageIndex, previousPageData) => {
  //   console.log(
  //     "🚀 ~ file: Discover.jsx ~ line 39 ~ getKey ~ previousPageData",
  //     previousPageData
  //   );
  //   if (previousPageData && !previousPageData.length) return null; // reached the end
  //   ; // SWR key
  // };

  // useEffect(() => {
  //   setMovies((prev) => [
  //     ...prev,
  //     ...mutateFetchedData(moviesFetchedData, "movie"),
  //   ]);
  // }, [moviesFetchedData]);

  // const moviesData = data ? [].concat(...data[0].results) : [];
  console.log("Movies: ", movies);

  // Mutate data API, injecting "media type"
  function mutateFetchedData(data, mediaType) {
    let modifiedDataObj = [];

    //Injecting property
    data.forEach((movie) => {
      modifiedDataObj.push(
        Object.assign({}, movie, {
          media_type: `${mediaType}`,
        })
      );
    });

    return modifiedDataObj;
  }

  return (
    <>
      <h2>Discover Page</h2>
      <MoviePagination
        movies={movies}
        pageNum={pageNum}
        setSize={setSize}
        isValidating={isValidating}
      />
    </>
  );
}
