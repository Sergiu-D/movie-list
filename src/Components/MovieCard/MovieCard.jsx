import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import Genre from "../MovieDetails/Genre";

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
    aspectRatio: "4/5",
    height: "100%",
    backgroundSize: "cover",
    zIndex: "500",
  },
  cardContent: {
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
  btn: {
    minWidth: "5%",
    minHeight: "5%",
    width: "15%",
    height: "7.2%",
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: "10000",
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

export default function MovieCard({ movies }) {
  const classes = useStyles();
  const [active, setActive] = React.useState(false);

  // debugger;
  const {
    id,
    genre_ids,
    poster_path,
    backdrop_path,
    vote_average,
    media_type,
  } = movies;

  const title = movies.title || movies.name;

  const movieImage = `https://image.tmdb.org/t/p/w300/${poster_path}`;

  // const movieBackdrop = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`;
  // console.log("Movie card, id: ", movieBg);

  const { url } = useRouteMatch();

  //TODO remove ":" from urlTitle

  const urlPath = title.replace(/\s/g, "+");
  // console.log("urlTitle: ", title.replace(/\s/g, "-"));

  const handleClick = () => setActive(!active);

  function scoreBg(score) {
    if (score >= 8) return "green";
    if (score > 5) return "orange";
    if (score <= 5) return "red";
  }

  //   const [moviesGenres, setMoviesGenres] = useState();

  //   useEffect(() => {
  //     axios({
  //       method: "get",
  //       url: `
  // https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`,
  //     }).then((res) => setMoviesGenres(res.data.genres));
  //   }, []);

  //   console.log("Movies Genres: ", moviesGenres);

  // function shortenTitle(t) {
  //   const arrTitle = t.split("");

  //   const shortTitle =
  //     arrTitle.length >= 15
  //       ? `${arrTitle.slice(0, 15).join("")}...`
  //       : arrTitle.join("");

  //   return shortTitle;
  // }
  // console.log("Gendres ids: ", genres);
  return (
    <>
      <Card className={classes.root}>
        <Button
          onClick={handleClick}
          variant={active ? "contained" : "outlined"}
          color="secondary"
          className={classes.btn}
        >
          +
        </Button>
        <Link
          to={{
            pathname: `${url}/${urlPath}`,
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
                {vote_average}
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
                {/* {shortenTitle(title)} */}
                {title}
              </Typography>

              <Genre
                // genres={genres}
                genreIds={genre_ids}
                mediaType={media_type}
              />
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}
