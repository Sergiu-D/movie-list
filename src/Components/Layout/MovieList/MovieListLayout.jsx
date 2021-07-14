import React from "react";

// Components
import MovieCard from "../../MovieCard/MovieCard";
import { GridContainer, GridItem } from "../Grid";

// Material-Ui
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(15, 1fr)",
  },
  container: {
    padding: "0 .5rem",
    paddingTop: "1rem",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  btn: {
    width: "15%",
    margin: "1.5rem auto",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: ".5rem 0",
    },
  },
}));

// TODO show more for both media types

export default function MovieList(props) {
  const classes = useStyles();

  const { data, sectionTitle, setShowMore } = props;

  // const mediaType = data[0].media_type;

  const handleBtn = () => {
    setShowMore((prev) => prev + 1);
  };

  return (
    <section className={classes.container}>
      {/* TODO change h1 to typography */}
      <h1>{sectionTitle}</h1>

      <GridContainer>
        {data.map((movie) => {
          return (
            <GridItem key={movie.id}>
              <MovieCard movie={movie} />
            </GridItem>
          );
        })}
      </GridContainer>

      {/* TODO make btn responsive */}
      <Button
        variant="contained"
        color="primary"
        // value={mediaType}
        className={classes.btn}
        onClick={() => handleBtn()}
      >
        Show More
      </Button>
    </section>
  );
}
