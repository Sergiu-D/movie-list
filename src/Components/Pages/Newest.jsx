import React, { useState, useEffect } from "react";

// Util
import axios from "axios";

// Components
import Cinema from "../Cinema";
import MovieList from "../MovieList";

export default function Newest() {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`,
      // params: { media_type: "movie", time_window: "week" },
    }).then((res) => setNewMovies(res.data.results));
  }, []);

  console.log("Newest", newMovies);

  return (
    <div>
      <h2>Newest Page</h2>
      <Cinema />
      <MovieList data={newMovies} sectionTitle={"Now playing"} />
    </div>
  );
}
