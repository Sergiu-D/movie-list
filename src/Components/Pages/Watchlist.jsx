import React, { useContext } from "react";

// Components
import MovieCard from "../MovieCard/MovieCard";

// Context
import { WatchListContext } from "../../Context/WatchListContext";

// Material-Ui
import { makeStyles, Grid, Button } from "@material-ui/core";

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
    width: "10%",
    margin: "0 auto",
  },
}));

const Watchlist = () => {
  // Change document title
  document.title = "Watch list";

  const classes = useStyles();

  const { list } = useContext(WatchListContext);

  console.log(list);
  return (
    <section className={classes.container}>
      <Grid container spacing={3} justify="flex-start">
        {!list ? (
          <h2>Watchlist is empty</h2>
        ) : (
          list.map((movie, index) => {
            return (
              <Grid item xs={4} sm={3} md={3} lg={2} key={index}>
                <MovieCard movie={movie} key={index} />
              </Grid>
            );
          })
        )}
      </Grid>
    </section>
  );
};

export default Watchlist;
