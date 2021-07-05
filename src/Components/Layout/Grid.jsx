import React from "react";

// Material-Ui
import { Grid, useMediaQuery } from "@material-ui/core";

const GridContainer = ({ children }) => {
  const smallBp = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Grid container spacing={smallBp ? 1 : 3} justify="flex-start">
      {children}
    </Grid>
  );
};

const GridItem = ({ children, index }) => {
  return (
    <Grid item xs={4} sm={3} md={3} lg={2} key={index}>
      {children}
    </Grid>
  );
};

export { GridContainer, GridItem };
