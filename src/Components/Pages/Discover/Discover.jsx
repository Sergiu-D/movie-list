import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

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

export default function Discover() {
  // Change document title
  document.title = "Discover";

  const [isMovies, setIsMovies] = useState(true);

  const location = useLocation().search;
  // console.log(
  //   "🚀 ~ file: Discover.jsx ~ line 30 ~ Discover ~ location",
  //   location
  // );
  const searchQuery = new URLSearchParams(location);
  console.log(
    "🚀 ~ file: Discover.jsx ~ line 29 ~ Discover ~ searchQuery",
    searchQuery.toString()
  );
  const mediaType = searchQuery.get("media_type") || "movie";
  // console.log(
  //   "🚀 ~ file: Discover.jsx ~ line 30 ~ Discover ~ mediaType",
  //   mediaType
  // );

  // const sortBy = searchQuery.get("sort_by") || "popularity.desc";

  // const voteAverage = searchQuery.get("vote_average") || "";
  // const year = searchQuery.get("year") || "";

  const filterParams = {
    mediaType: searchQuery.get("media_type"),
    sortBy: searchQuery.get("sort_by"),
    voteAverage: searchQuery.get("vote_average") || "",
    year: searchQuery.get("year") || "",
  };

  // Fetching data

  let mediaQuery, filterQuery;

  if (mediaType === "movie") {
    mediaQuery = `discover/movie`;
    filterQuery = `sort_by=${filterParams.sortBy}&vote_average.lte=${filterParams.voteAverage}&include_adult=false&year=${filterParams.year}&primary_release_year=&with_genres=`;
  }

  if (mediaType === "tv") {
    mediaQuery = `discover/tv`;
    filterQuery = `sort_by=${filterParams.sortBy}&vote_average.lte=${filterParams.voteAverage}&include_adult=false&first_air_date_year=${filterParams.year}&primary_release_year=&with_genres=`;
  }

  const { data, error, setSize } = useSWRInfinite(
    (index) => `${fetchingQuery(mediaQuery)}&${filterQuery}&page=${index + 1}`,
    fetcher
  );

  // Error handle
  if (!data)
    return (
      <PuffLoader color="RGB(240, 5, 75)" css={"margin: 0 auto;"} size={100} />
    );
  if (error) return <h1 style={{ margin: "auto", color: "red" }}>Error!</h1>;

  // Mutate data API, injecting "media type"

  const movies = [];
  const tvShows = [];

  if (mediaType === "movie") {
    data.forEach((element) => {
      movies.push(...addingMediaType(element.results, "movie"));
    });
  }

  if (mediaType === "tv") {
    data.forEach((element) => {
      tvShows.push(...addingMediaType(element.results, "tv"));
    });
  }

  return (
    <>
      <ContentPagination
        media={mediaType === "movie" ? movies : tvShows}
        setSize={setSize}
        totalResults={data[0].total_results}
      />
    </>
  );
}
