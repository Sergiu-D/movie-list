import React, { useMemo, createContext } from "react";

// Utils
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../Utils/fetchingQuery";

// Spinner
import PulseLoader from "react-spinners/PulseLoader";

export const GenresContext = createContext();

const GenresContextProvider = ({ children }) => {
  const moviesQuery = `genre/movie/list`;
  const showsQuery = `genre/tv/list`;

  const { data: moviesGenreObj, error: moviesError } = useSWR(
    fetchingQuery(moviesQuery),
    fetcher
  );
  const { data: showsGenreObj, error: showsError } = useSWR(
    fetchingQuery(showsQuery),
    fetcher
  );

  if (!moviesGenreObj || !showsGenreObj)
    return (
      <PulseLoader color="RGB(240, 5, 75)" css={"margin: 0 auto;"} size={5} />
    );
  if (moviesError || showsError) return <h2>Error!!!</h2>;

  const moviesGenres = moviesGenreObj.genres;
  const showsGenres = showsGenreObj.genres;

  return (
    <GenresContext.Provider value={{ moviesGenres, showsGenres }}>
      {children}
    </GenresContext.Provider>
  );
};

export default GenresContextProvider;
