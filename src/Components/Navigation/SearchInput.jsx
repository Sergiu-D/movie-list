import React, { useState } from "react";

import { useHistory } from "react-router";

// Material-Ui
import { Button, makeStyles, Input, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import { Label } from "@material-ui/icons";
// import blue from "@material-ui/core/colors/blue";

// Styles

const useStyles = makeStyles((theme) => ({
  searchInput: {
    maxWidth: "10rem",

    borderBottom: "2px solid",
    backgroundColor: "transparent",
    borderStyle: "none",

    fontFamily: "inherit",
    fontSize: "1rem",
    color: "grey",

    padding: ".5rem .2rem",

    transition: "border-color .2s ease-in",

    "&:focus": {
      outline: 0,
    },
  },

  searchBtn: {
    minWidth: "45px",
    minHeight: "35px",
    border: "1px solid white",
    borderRadius: "0 5px 5px 0",
    backgroundColor: "transparent",
    padding: 0,

    "&:hover": {
      backgroundColor: "rgba(255,255,255, .2)",
      borderColor: "white",
    },
  },
  searchActiveBtn: {
    minWidth: "45px",
    minHeight: "35px",
    border: "2px solid white",
    backgroundColor: "transparent",
    borderRadius: "0 5px 5px 0",
    padding: 0,
  },

  searchIconBtn: {
    fontSize: "2rem",
    padding: ".2rem ",
    fill: "white",
  },
}));

export default function Search() {
  const classes = useStyles();

  const history = useHistory();
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    // event.preventDefault();

    const inputValue = event.target[0].value.trim().toLowerCase();

    // Input validation
    const regex = new RegExp("[A-Za-z0-9]");

    if (!regex.test(inputValue)) return setIsError(true);

    // Reset URL pathname
    history.location.pathname = "/";

    // Construct URL
    const url = new URLSearchParams({
      query: inputValue,
      media_type: "movie",
    });
    history.push(`search?${url}`);

    // Reset input value
    if (regex.test(inputValue)) {
      setIsError(false);
      return (event.target[0].value = "");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="Search"
          style={
            isError ? { borderColor: "orangered" } : { borderColor: "white" }
          }
          className={classes.searchInput}
        />

        <Button
          style={
            isError ? { borderColor: "orangered" } : { borderColor: "white" }
          }
          className={classes.searchBtn}
          variant="outlined"
          type="submit"
          color="secondary"
        >
          <SearchIcon
            style={isError ? { fill: "orangered" } : { fill: "white" }}
            className={classes.searchIconBtn}
          />
        </Button>
      </form>
    </div>
  );
}
