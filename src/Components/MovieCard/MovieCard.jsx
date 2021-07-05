import React, { useState, useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";

// Components
import Genre from "../MovieDetails/Genre";
import { WatchListBtn } from "../Buttons";

// Context
import { WatchListContext } from "../../Context/WatchListContext";

// Material-Ui
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";

import orange from "@material-ui/core/colors/orange";

// Style
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyItems: "flex-start",

    border: 0,
    backgroundColor: "transparent",
    boxShadow: "3px 3px 10px 2px rgba(0,0,0, .2)",
  },
  cardActionArea: {
    height: "100%",
    transition: "all .2s ease",
    zIndex: "200",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.2)",
    },
  },
  img: {
    aspectRatio: "2/3",
  },
  cardContent: {
    minHeight: "76px",
    textAlign: "center",
    margin: ".2rem 0",
    padding: "0 .4rem",
  },
  title: {
    padding: ".8rem .5rem",

    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",

    color: "#fff",
  },
  paragraph: {
    color: "#fff",
    lineHeight: "1.5rem",
  },

  paper: {
    width: "38px",
    height: "38px",
    padding: ".2rem",

    position: "absolute",
    top: "10px",
    right: "10px",

    borderWidth: "3px",
    borderStyle: "solid",
    borderRadius: "50%",
    color: "white",
    backgroundColor: `rgba(0,0,0, .9)`,
    boxShadow: "0 0 5px 2px rgba(0,0,0,.4)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      width: "35px",
      height: "35px",

      top: "7px",
      right: "7px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "2px",
      right: "2px",

      borderWidth: "2px",

      width: "30px",
      height: "30px",
    },
  },
  scoreFont: {
    fontSize: ".9rem",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: ".8rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
    },
  },
}));

export default function MovieCard({ movie }) {
  const classes = useStyles();

  const {
    id,
    genre_ids,
    poster_path,
    backdrop_path,
    vote_average,
    media_type,
  } = movie;
  // console.log("🚀 ~ file: MovieCard.jsx ~ line 128 ~ MovieCard ~ movie", movie);

  const title = movie.title || movie.name;
  const genreIds = movie.genre_ids || movie.genres;

  const movieImage = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : `https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg`;

  const { url } = useRouteMatch();

  //TODO remove ":" from urlTitle

  // Creating URL path
  const normalizedTitle = title.replace(/\s/g, "+");
  const urlPath = `${media_type}/${id}/${normalizedTitle}`;
  // console.log(
  //   "🚀 ~ file: MovieCard.jsx ~ line 144 ~ MovieCard ~ urlPath",
  //   urlPath
  // );

  // Adding color to score
  function scoreBg(score) {
    if (score < 1) return "white";
    if (score >= 8) return "green";
    if (score > 5) return "orange";
    if (score <= 5) return "red";
  }

  return (
    <>
      <Card className={classes.root}>
        <WatchListBtn movie={movie} type="small" />
        <Link
          to={{
            pathname: `${url === "/" ? "/trending" : url}/${urlPath}`,

            state: {
              id: id,
              mediaType: media_type,
            },
          }}
        >
          <CardActionArea className={classes.cardActionArea}>
            <Paper
              className={classes.paper}
              style={{
                borderColor: `${scoreBg(vote_average)}`,
              }}
            >
              <Typography variant="caption" className={classes.scoreFont}>
                {vote_average < 1 ? "N/A" : vote_average}
              </Typography>
            </Paper>

            <CardMedia
              className={classes.img}
              component="img"
              alt={`${title} poster`}
              image={movieImage}
              title={title}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" className={classes.title}>
                {title}
              </Typography>

              <Genre genreIds={genreIds} mediaType={media_type} />
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}
