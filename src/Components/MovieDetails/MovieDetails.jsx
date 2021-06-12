import React from "react";
import ReactPlayer from "react-player/lazy";

//Components
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";

//Material-ui
import { makeStyles, Typography, Grid, useMediaQuery } from "@material-ui/core";

export default function MovieDetails({
  match: {
    params: { type: mediaType, id },
  },
}) {
  // Media query
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));

  // Filter incoming media
  function filterMediaType(callType) {
    if (mediaType === "movie")
      return fetchingQuery(
        `movie/${id}${callType === "videos" ? `/${callType}` : null}`
      );

    if (mediaType === "tv")
      return fetchingQuery(
        `tv/${id}${callType === "videos" ? `/${callType}` : null}`
      );
  }

  // Fetching media details
  const { data: mediaData, error: mediaError } = useSWR(
    filterMediaType(),
    fetcher
  );

  // Fetching media videos
  const { data: videosData, error: videosError } = useSWR(
    filterMediaType("videos"),
    fetcher
  );

  if (!mediaData) return <h1>Loading...</h1>;

  if (!videosData) return <h1>Loading...</h1>;
  if (videosError) return;

  const {
    original_title,
    overview,
    poster_path,
    backdrop_path,
    release_data,
    runtime,
    vote_average,
  } = mediaData;

  const title = mediaData.title || mediaData.name;
  const movieBg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  const videos = videosData.results;

  function makeVideoUrlArr() {
    let videosURL = [];

    videos.forEach((video) => {
      if (video.type === "Trailer" || video.type === "Teaser")
        return videosURL.push([`https://www.youtube.com/watch?v=${video.key}`]);
    });

    return videosURL;
  }

  // Change document title
  document.title = title;

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
          // alt={`${title} poster`}
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
        <Grid item lg={3} md={3} sm={12}>
          {makeVideoUrlArr().map((url, index) => (
            <ReactPlayer
              controls={true}
              width={350}
              height={200}
              key={index}
              url={url}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
