import React, { useState } from "react";

// Utils
import useSWR from "swr";
import fetcher from "../../Utils/fetcher";

// Components
import PageHeader from "../PageHeader";
import MovieList from "../MovieList";

export default function Trending() {
  const [moviesList, setMoviesList] = useState([]);
  const [showsList, setShowsList] = useState([]);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/trending/movies/week?api_key=${process.env.REACT_APP_API_KEY}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // data.results.filter(
  //   (item) => item.media_type === "movie" && setShowsList([item])
  // );
  // function filterList(item) {
  //   if (item.media_type === "movie")
  //     return setMoviesList([...moviesList, item]);

  //   if (item.media_type === "tv") return setShowsList([...showsList, item]);
  //   return;
  // }

  // console.log("tv shows", showsList);
  // console.log("movies", moviesList);
  // console.log("trending movies", data);
  return (
    <div>
      <PageHeader title={"Trending"} />
      <div>
        <MovieList title={"Movies"} />
        <MovieList title={"Tv Shows"} />
      </div>
    </div>
  );
}
