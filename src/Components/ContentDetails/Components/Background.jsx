import React from "react";

//Material-ui
import { makeStyles } from "@material-ui/core";

// Styles

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: -5,
  },
  image: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    objectPosition: "50% 50%",
  },
  overlay: {
    position: "inherit",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background:
      "radial-gradient(circle, rgba(0,54,77,.8) 10% , rgba(0,11,15,0.98) 70%)",
  },
}));

export default function Background(props) {
  const classes = useStyles();
  const { backdropPath, title } = props;

  const backgroundImage = `https://image.tmdb.org/t/p/original/${backdropPath}`;

  return (
    <div className={classes.container}>
      <img
        src={backgroundImage}
        alt={`${title} poster`}
        className={classes.image}
      />
      <div className={classes.overlay}></div>
    </div>
  );
}
