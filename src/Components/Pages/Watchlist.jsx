import React, { useContext } from "react";

// Components
import MovieCard from "../MovieCard/MovieCard";
import PageTitle from "../PageTitle";
import { GridContainer, GridItem } from "../Layout/Grid";

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
    minHeight: "100vh",
    display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
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

  return (
    <>
      <PageTitle pageTitle="Watch list" />
      {list.length === 0 ? (
        <h2
          style={{
            fontWeight: "300",
            margin: "auto",
            opacity: ".5",
          }}
        >
          Nothing here yet
        </h2>
      ) : (
        <GridContainer>
          {list.map((movie, index) => {
            return (
              <GridItem index={index}>
                <MovieCard movie={movie} key={index} />
              </GridItem>
            );
          })}
        </GridContainer>
      )}
    </>
  );
};

export default Watchlist;
