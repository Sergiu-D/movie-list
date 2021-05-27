import React, { useState, useEffect } from "react";

// Utils
import axios from "axios";

// Components
import PageHeader from "../PageHeader";
import MovieList from "../MovieList";

export default function Trending() {
  const [moviesList, setMoviesList] = useState([]);
  const [showsList, setShowsList] = useState([]);
  const [genres, setGenres] = useState([]);
  // const [showsGenres, setShowsGenres] = useState([]);

  // Genres movies API request

  useEffect(() => {
    axios({
      method: "get",
      url: `
  https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`,
    }).then((res) => setGenres((prev) => [...prev, res.data.genres]));
  }, []);

  // Genres tv shows API request

  useEffect(() => {
    axios({
      method: "get",
      url: `
  https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`,
    }).then((res) => setGenres((prev) => [...prev, res.data.genres]));
  }, []);

  // Movies API request
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`,
    }).then((res) => setMoviesList(res.data.results));
  }, []);

  // Tv shows API request
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`,
    }).then((res) => setShowsList(res.data.results));
  }, []);

  return (
    <div>
      {/* <PageHeader title={"Trending"} /> */}
      <div>
        <MovieList data={moviesList} genres={genres} sectionTitle={"Movies"} />
        <MovieList data={showsList} genres={genres} sectionTitle={"Tv Shows"} />
      </div>
    </div>
  );
}
