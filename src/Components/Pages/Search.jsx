import React from "react";
import { useHistory } from "react-router";

// Components
import MoviePagination from "../Layout/MoviePagination";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";
import addingMediaType from "../../Utils/addingMediaType";

// Material-Ui
import { Tabs, Tab } from "@material-ui/core";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";

const override = css`
  color: white;
  margin: auto;
`;

export default function Search() {
  const history = useHistory();
  const [tabsValue, setTabsValue] = React.useState(0);

  const searchedQuery = new URLSearchParams(history.location.search);
  const query = searchedQuery.get("query");

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
    return <PuffLoader color="RGB(240, 5, 75)" css={override} size={100} />;
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

  const handleClick = (mt) => {
    searchedQuery.set("media_type", mt);

    history.push(`search?${searchedQuery.toString()}`);
  };

  const mediaType = searchedQuery.get("media_type");

  const tabComp = (tabName, totalResults) => {
    return (
      <h4
        style={{
          fontWeight: "400",
          fontSize: "1.5rem",
          textTransform: "capitalize",
          color: "white",
        }}
      >
        {tabName}{" "}
        <span
          style={{
            fontSize: "1.5rem",
            padding: ".2rem",
            borderRadius: "50%",
            backgroundColor: "white",
            color: "grey",
          }}
        >
          {totalResults}
        </span>
      </h4>
    );
  };

  const handleTabs = (event, tab) => {
    setTabsValue(tab);
    searchedQuery.set("media_type", !tab ? "movie" : "tv");

    history.push(`search?${searchedQuery.toString()}`);
  };

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
        <Tabs
          value={tabsValue}
          onChange={handleTabs}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={tabComp("Movies", totalMoviesResults)} />

          <Tab label={tabComp("Tv Shows", totalTvShowsResult)} />
        </Tabs>
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
