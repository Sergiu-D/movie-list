import React, { useState, useEffect } from "react";

// Utils
import useAxios from "axios-hooks";
import useSWRInfinite from "swr";
import fetcher from "../../Utils/fetcher";

// Components
import MoviePagination from "../MoviePagination";

export default function Discover() {
  const [dataPerPage, setDataPerPage] = useState([]);
  const [page, setPage] = useState(1);
  const { data, loading, error } = useAxios({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
  });

  useEffect(() => {
    setDataPerPage([...dataPerPage, ...data.results]);
  }, []);

  console.log("Data ", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log("Data per page", dataPerPage);

  return (
    <>
      <h2>Discover Page</h2>
      <MoviePagination data={dataPerPage} setPage={setPage} />
    </>
  );
}
