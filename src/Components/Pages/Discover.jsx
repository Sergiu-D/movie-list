import React, { useState, useEffect } from "react";

// Utils
import axios from "axios";

// Components
import MoviePagination from "../MoviePagination";

export default function Discover() {
  const [pageNum, setPageNum] = useState(1);
  const [moviesFetchedData, setMoviesFetchData] = useState([]);

  const [movies, setMovies] = useState([]);

  // Fetching movies data.
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`,
      params: { page: pageNum },
    }).then((res) => setMoviesFetchData([...res.data.results]));
  }, [pageNum]);

  // Setting mutated data into state.
  useEffect(() => {
    setMovies((prev) => [
      ...prev,
      ...mutateFetchedData(moviesFetchedData, "movie"),
    ]);
  }, [moviesFetchedData]);

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
        setPageNum={setPageNum}
      />
    </>
  );
}
