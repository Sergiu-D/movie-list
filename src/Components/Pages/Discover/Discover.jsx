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

  const location = useLocation().search;

  const searchQuery = new URLSearchParams(location);

  const filterParams = {
    mediaType: searchQuery.get("media_type"),
    sortBy: searchQuery.get("sort_by"),
    voteAverage: searchQuery.get("vote_average") || "",
    year: searchQuery.get("year") || "",
  };

  // Fetching data

  let mediaQuery, filterQuery;

  if (filterParams.mediaType === "movie") {
    mediaQuery = `discover/movie`;
    filterQuery = `sort_by=${filterParams.sortBy}&vote_average.lte=${filterParams.voteAverage}&include_adult=false&year=${filterParams.year}&primary_release_year=&with_genres=`;
  }

  if (filterParams.mediaType === "tv") {
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

  if (filterParams.mediaType === "movie") {
    data.forEach((element) => {
      movies.push(...addingMediaType(element.results, "movie"));
    });
  }

  if (filterParams.mediaType === "tv") {
    data.forEach((element) => {
      tvShows.push(...addingMediaType(element.results, "tv"));
    });
  }

  return (
    <>
      <ContentPagination
        media={filterParams.mediaType === "movie" ? movies : tvShows}
        setSize={setSize}
        totalResults={data[0].total_results}
      />
    </>
  );
}
