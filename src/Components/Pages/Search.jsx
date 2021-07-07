import React from "react";
import { useHistory } from "react-router";

// Utils
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";

export default function Search() {
  const history = useHistory();

  const searchedQuery = new URLSearchParams(history.location.search);
  const query = searchedQuery.get("query");

  const urlFetcher = `${fetchingQuery(
    `search/multi`
  )}&include_adult=false&query=${query}`;

  const { data, error } = useSWR(urlFetcher, fetcher);

  if (!data) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  console.log(
    "🚀 ~ file: SearchLayout.jsx ~ line 21 ~ SearchLayout ~ data",
    data
  );

  return <div>Total results: {data.total_results} </div>;
}
