import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

// Utils
import formatRuntime from "../../Utils/formatRuntime";
import useSWR from "swr";
import fetchingQuery, { fetcher } from "../../Utils/fetchingQuery";

//Material-ui
import {
  makeStyles,
  useMediaQuery,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";

export default function MovieDetails({
  match: {
    params: { type: mediaType, id },
  },
}) {
  const [isMovie, setIsMovie] = useState(false);
  // Media query
  const mediumBp = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const smallBp = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Filter incoming media
  useEffect(() => {
    if (mediaType === "movie") setIsMovie(true);
    if (mediaType === "tv") setIsMovie(false);
  }, []);

  const filterMediaType = (callType) => {
    if (mediaType === "movie") {
      return fetchingQuery(
        `movie/${id}${callType === "videos" ? `/${callType}` : null}`
      );
    }

    if (mediaType === "tv") {
      return fetchingQuery(
        `tv/${id}${callType === "videos" ? `/${callType}` : null}`
      );
    }
  };

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
    release_date,
    runtime,
    vote_average,
    genres,
  } = mediaData;
  console.log("🚀 ~ file: MovieDetails.jsx ~ line 64 ~ mediaData", mediaData);

  const title = mediaData.title || mediaData.name;

  // Change document title
  document.title = title;

  const movieBg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  const videos = videosData.results;

  const makeVideoUrlArr = (v) => {
    let videosURL = [];

    v.forEach((video) => {
      if (video.type === "Trailer" || video.type === "Teaser")
        return videosURL.push([`https://www.youtube.com/watch?v=${video.key}`]);
    });

    return videosURL;
  };

  const reverseReleaseDate = (date) => {
    const reversedDate = date.split("-").slice(0, 1).reverse().join(" ");
    return reversedDate;
  };

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
        spacing={3}
        style={
          mediumBp
            ? {
                width: "100vw",
                height: "100vh",
                padding: "0 2.5rem",
              }
            : { width: "81.5vw", height: "100vh" }
        }
      >
        <Grid
          item
          lg={9}
          md={9}
          sm={12}
          // align={mediumBp ? "center" : "inherit"}
        >
          <Typography
            variant="h1"
            paragraph={true}
            style={{ fontWeight: 800 }}
            align={smallBp ? "center" : "inherit"}
          >
            {title}
          </Typography>

          <div
            style={
              smallBp
                ? {
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px",
                    fontWeight: 100,
                  }
                : {
                    display: "flex",

                    gap: "15px",
                    fontWeight: 100,
                  }
            }
          >
            {genres.map((genre, index) => (
              <Typography
                key={index}
                variant="overline"
                style={{
                  fontSize: "15px",
                  borderBottom: "2px solid white",
                  marginBottom: "2rem",
                  // borderTop: "2px solid white",
                  // borderRadius: "10px",
                  // padding: "0 .5rem",
                }}
              >
                {genre.name}
              </Typography>
            ))}
          </div>

          {isMovie ? (
            <Box align={smallBp ? "center" : "inherit"}>
              <Typography variant="h5" paragraph={true}>
                {/* Release Date:{" "} */}

                {reverseReleaseDate(release_date)}
              </Typography>
              <Typography variant="h5" paragraph={true}>
                Runtime:{" "}
                <span style={{ fontWeight: 100 }}>
                  {formatRuntime(runtime)}
                </span>
              </Typography>
            </Box>
          ) : (
            <Box align={smallBp ? "center" : "inherit"}>
              <Typography variant="h5" paragraph={true}>
                {mediaData.first_air_date.slice(0, 4)} ~{" "}
                {mediaData.next_episode_to_air
                  ? `next episode: ${mediaData.next_episode_to_air.air_date
                      .split("-")
                      .reverse()
                      .join("/")}`
                  : mediaData.last_air_date.slice(0, 4)}
              </Typography>
              <Typography variant="h5" paragraph={true}>
                Seasons: {mediaData.number_of_seasons}
              </Typography>
              <Typography variant="h5" paragraph={true}>
                Total Episodes: {mediaData.number_of_episodes}
              </Typography>
              <Typography variant="h5" paragraph={true}>
                Runtime per episode:{" "}
                {formatRuntime(mediaData.episode_run_time[0])}
              </Typography>
            </Box>
          )}

          {/* <Genre genreIds={genre_ids} mediaType={media_type} /> */}
        </Grid>
        {makeVideoUrlArr(videos).length === 0 ? (
          ""
        ) : (
          <Grid item align="center" lg={3} md={3} sm={12}>
            <Typography variant="h2">Trailers</Typography>
            {makeVideoUrlArr(videos)
              .splice(0, 2)
              .map((url, index) => (
                <ReactPlayer
                  style={{ margin: "1.5rem 0" }}
                  controls={true}
                  width={350}
                  height={200}
                  key={index}
                  url={url}
                />
              ))}
          </Grid>
        )}
        <Grid item lg={8} md={8} sm={12}>
          {overview}
        </Grid>
      </Grid>
    </div>
  );
}
