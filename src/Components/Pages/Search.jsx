import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

// Components
import MoviePagination from "../Layout/MoviePagination";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import addingMediaType from "../../Utils/addingMediaType";

// Material-Ui
import { Typography, Tabs, Tab, useMediaQuery } from "@material-ui/core";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";

export default function Search() {
  const history = useHistory();

  const mediumBp = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const searchedQuery = new URLSearchParams(history.location.search);
  const query = searchedQuery.get("query");
  const mediaType = searchedQuery.get("media_type");

  const [tabsValue, setTabsValue] = React.useState(mediaType);

  useEffect(() => {
    setTabsValue(mediaType);
  }, [mediaType]);

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

  if (!movies || !tvShows)
    return (
      <PuffLoader color="RGB(240, 5, 75)" css="margin: auto;" size={100} />
    );
  if (errorMovies || errorTvShows) return <h1>Error!</h1>;

  const totalMoviesResults = movies[0].total_results;
  const totalTvShowsResult = tvShows[0].total_results;

  const searchedMovieData = [];
  const searchedTvShowsData = [];

  movies.forEach((element) =>
    searchedMovieData.push(...addingMediaType(element.results, "movie"))
  );
  tvShows.forEach((element) =>
    searchedTvShowsData.push(...addingMediaType(element.results, "tv"))
  );

  const tabComp = (tabName, totalResults) => {
    return (
      <h4
        style={{
          display: "flex",
          gap: 10,
          fontWeight: 300,
          fontSize: "1.5rem",
          textTransform: "capitalize",
          color: "white",
        }}
      >
        {tabName}:
        <span
          style={{
            fontWeight: 500,
          }}
        >
          {totalResults}
        </span>
      </h4>
    );
  };

  const handleTabs = (event, tab) => {
    const checkMediaType = !tab ? "movie" : "tv";
    searchedQuery.set("media_type", checkMediaType);

    history.push(`search?${searchedQuery.toString()}`);
  };

  return (
    <>
      {mediumBp && (
        <Typography
          variant="h1"
          style={{ textAlign: "center", margin: "2rem 0" }}
        >
          Results for: <br />
          {query.toUpperCase()}
        </Typography>
      )}

      <Tabs
        style={{ margin: "2rem auto" }}
        value={tabsValue === "movie" ? 0 : 1}
        onChange={handleTabs}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label={tabComp("Movies", totalMoviesResults)} />

        <Tab label={tabComp("Tv Shows", totalTvShowsResult)} />
      </Tabs>
      {/* </div> */}
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
    </>
  );
}
