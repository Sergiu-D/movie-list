import React from "react";
import { Link, useLocation } from "react-router-dom";

// Components
import AverageVote from "./AverageVote";
import Genre from "./Genre";
import { WatchListBtn } from "../Buttons";

//Context
import GenresContextProvider from "../../Context/GenresContext";

// Lazy img load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Material-Ui
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Paper,
} from "@material-ui/core";

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
    minHeight: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",

    textAlign: "center",
    margin: ".2rem 0",
    padding: "0 .4rem",
  },
  title: {
    padding: "0 .5rem",

    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",

    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem .2rem",
    },
  },
  paragraph: {
    color: "#fff",
    lineHeight: "1.5rem",
  },

  score: {
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

    zIndex: "100",

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

const ContentCard = ({ movie }) => {
  const classes = useStyles();
  const location = useLocation();

  const { id, poster_path, vote_average, media_type } = movie;

  const title = movie.title || movie.name;
  const genreIds = movie.genre_ids || movie.genres;

  const movieImage = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : `https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg`;

  // Creating URL path
  const normalizedTitle = title.replace(/\s/g, "+");
  const urlPath = `?media_type=${media_type}&id=${id}&name=${normalizedTitle}`;

  // Adding color to score
  // function scoreBg(score) {
  //   if (score < 1) return "white";
  //   if (score >= 8) return "green";
  //   if (score > 5) return "orange";
  //   if (score <= 5) return "red";
  // }

  return (
    <>
      <Card className={classes.root}>
        <WatchListBtn movie={movie} type="small" />
        <Link
          to={{
            pathname: `${location.pathname}/selected`,
            search: urlPath,
          }}
        >
          <CardActionArea className={classes.cardActionArea}>
            <AverageVote vote_average={vote_average} />
            {/* <Paper
              className={classes.score}
              style={{
                borderColor: `${scoreBg(vote_average)}`,
              }}
            >
              <Typography variant="caption" className={classes.scoreFont}>
                {vote_average < 1 ? "N/A" : vote_average}
              </Typography>
            </Paper> */}
            <LazyLoadImage
              className={classes.img}
              height="100%"
              width="100%"
              effect="blur"
              alt={`${title} poster`}
              src={movieImage}
              threshold={400}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" className={classes.title}>
                {title}
              </Typography>
              <GenresContextProvider>
                <Genre genreIds={genreIds} mediaType={media_type} />
              </GenresContextProvider>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};

export default ContentCard;
