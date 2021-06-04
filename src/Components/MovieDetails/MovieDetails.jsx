import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

//Components
import Video from "./Video";

import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";

//Material-ui
import { makeStyles, Typography, Grid, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bgContainer: {},
}));

export default function MovieDetails({ match }) {
  const classes = useStyles();
  const [titleDetails, setTitleDetails] = useState([]);
  const [videos, setVideos] = useState([]);

  const location = useLocation();

  const titleId = location.state.id;
  const mediaType = location.state.mediaType;

  // Media query
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));

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

  // Get history URL
  const history = useHistory();
  const handleHistory = () => {
    history.push(`${location.pathname}`);
  };

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

  // Fetching videos
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${titleId}/videos?api_key=${process.env.REACT_APP_API_KEY}`,
    }).then((res) => setVideos(res.data.results));
  }, []);

  const title = titleDetails.title || titleDetails.name;
  const movieBg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  function makeVideoUrlArr() {
    let videosURL = [];
    videos.forEach((video) => {
      if (video.type === "Trailer" || video.type === "Teaser")
        return videosURL.push([`https://www.youtube.com/watch?v=${video.key}`]);
    });

    // console.log("Vide url: ", videosURL);
    return videosURL;
  }
  // console.log("Videos url: ", videos);

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

      <Grid
        container
        alignContent={"center"}
        style={
          matches
            ? {
                width: "100vw",
                height: "100vh",
                padding: "0 2.5rem",
              }
            : { width: "81.5vw", height: "100vh" }
        }
      >
        <Grid item lg={9} md={9} sm={12}>
          <Typography variant="h1">{title}</Typography>
        </Grid>
        {/* {videos.length > 1 ? (
        videos.map((video, index) => {
          <ReactPlayer
            key={index}
            url={`https://www.youtube.com/watch?v=${video.key}`}
          />;
        })
      ) : (
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videos[0].key}`} />
      )} */}
        {/* {videos.map((video, index) => {
        console.log("one video: ", video.key);
        // debugger;
        <Video
          key={index}
          url={`https://www.youtube.com/watch?v=${video.key}`}
        />;
      })} */}
        {/* <ReactPlayer url={makeVideoUrlArr()} controls={true} playing={false} /> */}

        <Grid item lg={3} md={3} sm={12}>
          {videos.length > 1 ? (
            <>
              <ReactPlayer
                url={makeVideoUrlArr()[0]}
                controls={true}
                width={350}
                height={200}
              />
              <ReactPlayer
                url={makeVideoUrlArr()[1]}
                controls={true}
                width={350}
                height={200}
              />
            </>
          ) : (
            <ReactPlayer
              url={makeVideoUrlArr()[0]}
              controls={true}
              width={350}
              height={200}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
