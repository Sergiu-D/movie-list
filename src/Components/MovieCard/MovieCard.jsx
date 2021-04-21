import React, { useState } from "react";

// Material-Ui
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";

// Style
const useStyles = makeStyles({
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
  media: {
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
    color: "#fff",
    marginBottom: ".2rem",
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
    // padding: "5px 15px"
  },
  paper: {
    width: "40px",
    height: "40px",

    position: "absolute",
    top: "10px",
    right: "10px",

    borderRadius: "50%",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: 700,
    boxShadow: "0 0 5px 2px rgba(0,0,0,.4)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function MovieCard({ title, poster_path, vote_average }) {
  const classes = useStyles();
  const [active, setActive] = React.useState(false);

  const movieImage = `https://image.tmdb.org/t/p/w300/${poster_path}`;

  const handleClick = () => setActive(!active);

  function scoreBg(score) {
    if (score > 8) return "green";
    if (score > 5) return "orange";
    if (score < 5) return "red";
  }

  function shortenTitle(t) {
    const arrTitle = t.split("");

    const shortTitle =
      arrTitle.length >= 15
        ? `${arrTitle.slice(0, 15).join("")}...`
        : arrTitle.join("");

    return shortTitle;
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <Button
          onClick={handleClick}
          variant={active ? "contained" : "outlined"}
          color="secondary"
          className={classes.btn}
        >
          +
        </Button>
        <Paper
          className={classes.paper}
          style={{
            backgroundColor: `rgba(255,255,255, .8)`,
            border: `3px solid ${scoreBg(vote_average)}`,
            color: `${scoreBg(vote_average)}`,
          }}
        >
          {vote_average}
        </Paper>

        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          image={movieImage}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" className={classes.title}>
            {shortenTitle(title)}
          </Typography>
          <Typography variant="p" className={classes.paragraph}>
            Genre
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
