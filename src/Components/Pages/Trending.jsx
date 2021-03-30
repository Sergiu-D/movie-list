import React, { useState, useEffect } from "react";

// Utils
import axios from "axios";

// Components
import PageHeader from "../PageHeader";
import MovieList from "../MovieList";

export default function Trending() {
  const [moviesList, setMoviesList] = useState([]);
  const [showsList, setShowsList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`,
    }).then((res) => setMoviesList(res.data.results));
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`,
    }).then((res) => setShowsList(res.data.results));
  }, []);

  // const { data, error } = useSWR(
  //   `https://api.themoviedb.org/3/trending/movies/week?api_key=${process.env.REACT_APP_API_KEY}`,
  //   fetcher
  // );
  // const movies = !data
  //   ? null
  //   : data.results.filter((item) => item.media_type === "movie");

  // const shows = !data
  //   ? null
  //   : data.results.filter((item) => item.media_type === "tv");

  // useEffect(() => {
  //   if (JSON.stringify(moviesList !== JSON.stringify(shows))) {
  //     setShowsList(shows);
  //     console.log("FETCH OK");
  //   }
  // }, [data]);
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  // console.log("Movies", moviesList);
  // console.log("Tv Shows", showsList);
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
        <MovieList data={moviesList} sectionTitle={"Movies"} />
        <MovieList data={showsList} sectionTitle={"Tv Shows"} />
      </div>
    </div>
  );
}
