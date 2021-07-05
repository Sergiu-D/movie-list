import React from "react";

// Material-Ui
import { Grid } from "@material-ui/core";

const GridContainer = ({ children }) => {
  return (
    <Grid container spacing={1} justify="flex-start">
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
