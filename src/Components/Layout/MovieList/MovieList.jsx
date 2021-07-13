import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Utils
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../../Utils/fetchingQuery";
import addingMediaType from "../../..//Utils/addingMediaType";

// Components
import MovieListLayout from "./MovieListLayout";
import PageTitle from "../../PageTitle";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";

export default function MovieList(props) {
  const { moviesQuery, showsQuery, pageTitle } = props;

  // Change document title
  document.title = `${pageTitle}`;

  const history = useHistory();
  const location = history.location.pathname;

  const [getShowMore, setGetShowMore] = useState("");

  // Set previous search params
  useEffect(() => {
    const query = history.location.search;

    const searchParams = new URLSearchParams(query);

    for (let type of searchParams.entries()) {
      const key = type[0];
      const value = JSON.parse(type[1]);

      if (value) setGetShowMore((prev) => [...new Set([...prev, key])]);
    }
  }, []);

  const createSearchParams = (isMovie, isTv) => {
    if (!isMovie && !isTv) return "";
    if (isMovie && isTv) return { movie: isMovie, tv: isTv };
    if (isMovie) return { movie: isMovie };
    if (isTv) return { tv: isTv };
  };

  // Set state new search params
  useEffect(() => {
    const isMovie = getShowMore.includes("movie");
    const isTv = getShowMore.includes("tv");

    const paramsStr = new URLSearchParams(createSearchParams(isMovie, isTv));

    history.replace(`${location}?${paramsStr.toString()}`);
  }, [getShowMore]);

  // Fetching data
  const { data: moviesData, error: moviesError } = useSWR(
    fetchingQuery(moviesQuery),
    fetcher
  );
  const { data: showsData, error: showsError } = useSWR(
    fetchingQuery(showsQuery),
    fetcher
  );

  // Error handle
  if (!moviesData || !showsData)
    return (
      <PuffLoader color="RGB(240, 5, 75)" css={"color: white;"} size={100} />
    );
  if (moviesError || showsError)
    return <h1 style={{ margin: "auto" }}>Error!</h1>;

  // Check for media type
  const checkMediaType = (fetchedData, mediaType) => {
    const hasMediaType = fetchedData.results.hasOwnProperty("media_type");

    if (!hasMediaType) return addingMediaType(fetchedData.results, mediaType);

    return fetchedData.results;
  };

  return (
    <>
      <PageTitle pageTitle={pageTitle} />

      <MovieListLayout
        data={checkMediaType(moviesData, "movie")}
        sectionTitle={"Movies"}
        setGetShowMore={setGetShowMore}
        getShowMore={getShowMore}
      />
      <MovieListLayout
        data={checkMediaType(showsData, "tv")}
        sectionTitle={"Tv Shows"}
        setGetShowMore={setGetShowMore}
        getShowMore={getShowMore}
      />
    </>
  );
}
