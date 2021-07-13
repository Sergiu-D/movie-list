import React from "react";

// Material Ui
import { useMediaQuery, Typography } from "@material-ui/core";

export default function PageTitle({ pageTitle }) {
  const mediumBp = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const smallBp = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Typography
      variant="h1"
      style={
        mediumBp
          ? { display: "flex", justifyContent: "center", margin: "2.5rem 0" }
          : { display: "none" }
      }
    >
      {pageTitle}
    </Typography>
  );
}
