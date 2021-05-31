import React, { useState, useEffect } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

export default function MovieDetails({ match }) {
  const [titleDetails, setTitleDetails] = useState([]);

  const location = useLocation();
  const titleId = location.state.id;
  const mediaType = location.state.mediaType;

  console.log("Details title: ", mediaType);

  const {
    id,
    original_title,
    overview,
    poster_path,
    backdrop_path,
    release_data,
    runtime,
    vote_average,
  } = titleDetails;

  const title = titleDetails.title || titleDetails.name;

  const movieBg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  //   const titleId = match.params.title;
  console.log("title id: ", titleId);

  useEffect(() => {
    if (mediaType === "movie")
      return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${titleId}?api_key=${process.env.REACT_APP_API_KEY}`,
      }).then((res) => setTitleDetails(res.data));

    if (mediaType === "tv")
      return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/tv/${titleId}?api_key=${process.env.REACT_APP_API_KEY}`,
      }).then((res) => setTitleDetails(res.data));
  }, []);

  console.log("Title details: ", titleDetails);
  //   console.log("Title Bg: ", movieBg);
  return (
    <div>
      {title}

      <img src={movieBg} alt={`${title} poster`} />
    </div>
  );
}
