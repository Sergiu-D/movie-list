import React, { useState, useRef } from "react";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../../Utils/fetchingQuery";
import addingMediaType from "../../../Utils/addingMediaType";

// Components
import ContentPagination from "../../Layout/ContentPagination";
// import Filters from "../../Filters";
import PageTitle from "../../PageTitle";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";

const override = css`
  color: white;
  margin: auto;
`;

export default function Discover() {
  // Change document title
  document.title = "Discover";

  const [isMovies, setIsMovies] = useState(true);
  // const [sorting, setSorting] = useState("popularity.desc");
  // const [voteAverage, setVoteAverage] = useState(10);
  // const [yearFilter, setYearFilter] = useState([]);
  // const [genresIds, setGenresIds] = useState([]);

  const refContainer = useRef([]);

  const selectGenres = (genres) => {
    const gen = [];
    genres.map((genre) => gen.push(genre.id));

    return gen.join(",");
  };

  // Fetching data

  let mediaQuery, filterQuery;

  if (isMovies) {
    mediaQuery = `discover/movie`;
    filterQuery = `sort_by=popularity.desc&vote_average.lte=&include_adult=false&year=&primary_release_year=&with_genres=`;
  }

  if (!isMovies) {
    mediaQuery = `discover/tv`;
    filterQuery = `sort_by=popularity.desc&vote_average.lte=&include_adult=false&first_air_date_year=&primary_release_year=&with_genres=`;
  }

  const { data, error, setSize } = useSWRInfinite(
    (index) => `${fetchingQuery(mediaQuery)}&${filterQuery}&page=${index + 1}`,
    fetcher
  );

  // Error handle
  if (!data)
    return <PuffLoader color="RGB(240, 5, 75)" css={override} size={100} />;
  if (error) return <h1 style={{ margin: "auto", color: "red" }}>Error!</h1>;

  // Mutate data API, injecting "media type"

  const movies = [];
  const tvShows = [];

  if (isMovies) {
    data.forEach((element) => {
      movies.push(...addingMediaType(element.results, "movie"));
    });
  }

  if (!isMovies) {
    data.forEach((element) => {
      tvShows.push(...addingMediaType(element.results, "tv"));
    });
  }

  return (
    <>
      <PageTitle pageTitle="Discover" />
      {/* <Filters
        isMovies={isMovies}
        // setIsMovies={setIsMovies}
        // sorting={sorting}
        // setSorting={setSorting}
        // voteAverage={voteAverage}
        // setVoteAverage={setVoteAverage}
        // yearFilter={yearFilter}
        // setYearFilter={setYearFilter}
        // genreIds={genresIds}
        // setGenresIds={setGenresIds}
        // refContainer={refContainer}
      /> */}
      <ContentPagination
        media={isMovies ? movies : tvShows}
        setSize={setSize}
        totalResults={data[0].total_results}
      />
    </>
  );
}
