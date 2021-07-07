import React from "react";
import { useHistory } from "react-router";

// Components
import MoviePagination from "../Layout/MoviePagination";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import addingMediaType from "../../Utils/addingMediaType";

// Material-Ui
import { Button } from "@material-ui/core";

export default function Search() {
  const history = useHistory();

  const searchedQuery = new URLSearchParams(history.location.search);
  const query = searchedQuery.get("query");

  // const urlFetcher = ;

  // const { data, error } = useSWR(urlFetcher, fetcher);

  const {
    data: movies,
    error: errorMovies,
    setSize: setMoviesSize,
  } = useSWRInfinite(
    (index) =>
      `${fetchingQuery(
        `search/movie`
      )}&include_adult=false&query=${query}&page=${index + 1}`,
    fetcher
  );

  const {
    data: tvShows,
    error: errorTvShows,
    setSize: setTvShowsSize,
  } = useSWRInfinite(
    (index) =>
      `${fetchingQuery(`search/tv`)}&include_adult=false&query=${query}&page=${
        index + 1
      }`,
    fetcher
  );

  if (!movies || !tvShows) return <h1>Loading...</h1>;
  if (errorMovies || errorTvShows) return <h1>Error!</h1>;

  const totalMoviesResults = movies[0].total_results;
  const totalTvShowsResult = tvShows[0].total_results;
  console.log(
    "🚀 ~ file: Search.jsx ~ line 50 ~ Search ~ totalTvShowsResult",
    totalTvShowsResult
  );
  console.log(
    "🚀 ~ file: Search.jsx ~ line 49 ~ Search ~ totalMoviesResults",
    totalMoviesResults
  );

  const searchedMovieData = [];
  const searchedTvShowsData = [];

  movies.forEach((element) =>
    element.results.forEach((el) => searchedMovieData.push(el))
  );
  tvShows.forEach((element) =>
    element.results.forEach((el) => searchedTvShowsData.push(el))
  );

  const handleClick = (mt) => {
    searchedQuery.set("media_type", mt);

    history.push(`search?${searchedQuery.toString()}`);
  };

  const mediaType = searchedQuery.get("media_type");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
          margin: "2rem 0",
        }}
      >
        <Button
          variant={mediaType === "movie" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => handleClick("movie")}
        >
          Movies{" "}
          <span
            style={{
              padding: ".5rem .9rem",
              backgroundColor: "white",
              color: "#1F2931",
              borderRadius: "50%",
              marginLeft: "2rem",
            }}
          >
            {totalMoviesResults}
          </span>
        </Button>
        <Button
          variant={mediaType === "tv" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => handleClick("tv")}
        >
          Tv Shows{" "}
          <span
            style={{
              padding: ".5rem .9rem",
              backgroundColor: "white",
              color: "#1F2931",
              borderRadius: "50%",
              marginLeft: "2rem",
            }}
          >
            {totalTvShowsResult}
          </span>
        </Button>
      </div>
      {mediaType === "movie" ? (
        <MoviePagination
          media={searchedMovieData}
          setSize={setMoviesSize}
          totalResults={totalMoviesResults}
        />
      ) : (
        <MoviePagination
          media={searchedTvShowsData}
          setSize={setTvShowsSize}
          totalResults={totalTvShowsResult}
        />
      )}
    </div>
  );
}
