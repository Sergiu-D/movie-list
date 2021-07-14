import React from "react";

//Material-ui
import { makeStyles, useMediaQuery, Typography, Grid } from "@material-ui/core";

const GridContainerTab = ({ children }) => {
  return (
    <Grid container spacing={1}>
      {children}
    </Grid>
  );
};

const GridItemTab = ({ children }) => {
  return (
    <Grid item xs={12} md={6} lg={6}>
      {children}
    </Grid>
  );
};

export { GridContainerTab, GridItemTab };
