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
