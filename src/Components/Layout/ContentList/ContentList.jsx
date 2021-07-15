import React from "react";

// Utils
import { useSWRInfinite } from "swr";
import fetchingQuery, { fetcher } from "../../../Utils/fetchingQuery";
import addingMediaType from "../../../Utils/addingMediaType";

// Components
import ContentListLayout from "./ContentListLayout";
import PageTitle from "../../PageTitle";

// Spinner
import PuffLoader from "react-spinners/PuffLoader";

export default function ContentList(props) {
  const { moviesQuery, showsQuery, pageTitle } = props;

  // Change document title
  document.title = `${pageTitle}`;

  // Fetching data
  const {
    data: moviesData,
    error: moviesError,
    setSize: setMoviesSeize,
  } = useSWRInfinite(
    (index) => `${fetchingQuery(moviesQuery)}&page=${index + 1}`,
    fetcher
  );
  const {
    data: showsData,
    error: showsError,
    setSize: setShowsSize,
  } = useSWRInfinite(
    (index) => `${fetchingQuery(showsQuery)}&page=${index + 1}`,
    fetcher
  );

  // Error handle
  if (!moviesData || !showsData)
    return (
      <PuffLoader
        color="RGB(240, 5, 75)"
        css={"color: white; margin: auto;"}
        size={100}
      />
    );
  if (moviesError || showsError)
    return <h1 style={{ margin: "auto" }}>Error!</h1>;

  const movies = [];
  const shows = [];
  moviesData.forEach((obj) =>
    movies.push(...addingMediaType(obj.results, "movie"))
  );
  showsData.forEach((obj) => shows.push(...addingMediaType(obj.results, "tv")));

  return (
    <>
      <PageTitle pageTitle={pageTitle} />

      <ContentListLayout
        data={movies}
        sectionTitle={"Movies"}
        setShowMore={setMoviesSeize}
        // getShowMore={getShowMore}
      />
      <ContentListLayout
        data={shows}
        sectionTitle={"Tv Shows"}
        setShowMore={setShowsSize}
        // getShowMore={getShowMore}
      />
    </>
  );
}
