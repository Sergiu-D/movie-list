import React, { useState, useEffect } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

//Material-ui
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bgContainer: {},
}));

export default function MovieDetails({ match }) {
  const classes = useStyles();
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
      {/* Background container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -5,
        }}
      >
        {/* Background image */}
        <img
          src={movieBg}
          alt={`${title} poster`}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />

        {/* Background overlay */}
        <div
          style={{
            position: "inherit",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background:
              "radial-gradient(circle, rgba(0,54,77,.8) 10% , rgba(0,11,15,0.98) 70%)",
          }}
        ></div>
      </div>
      {/* End background container */}

      {title}
    </div>
  );
}
