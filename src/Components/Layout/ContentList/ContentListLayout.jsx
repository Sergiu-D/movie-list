import React from "react";

// Components
import ContentCard from "../../ContentCard/ContentCard";
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

export default function ContentListLayout(props) {
  const classes = useStyles();

  const { data, sectionTitle, setShowMore } = props;

  const handleBtn = () => {
    setShowMore((prev) => prev + 1);
  };

  return (
    <section className={classes.container}>
      <h1 style={{ fontSize: "3rem", fontWeight: 200, margin: "2rem auto" }}>
        {sectionTitle}
      </h1>

      <GridContainer>
        {data.map((movie) => {
          return (
            <GridItem key={movie.id}>
              <ContentCard movie={movie} />
            </GridItem>
          );
        })}
      </GridContainer>
      {data.length >= 100 ? (
        <h3 style={{ margin: "2rem auto" }}>That is it!</h3>
      ) : (
        <Button
          variant="contained"
          color="primary"
          // value={mediaType}
          className={classes.btn}
          onClick={() => handleBtn()}
        >
          Show More
        </Button>
      )}
    </section>
  );
}
