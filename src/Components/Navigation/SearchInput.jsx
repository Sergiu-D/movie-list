import React, { useState } from "react";

import { useHistory } from "react-router";

// Material-Ui
import { Button, makeStyles, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import blue from "@material-ui/core/colors/blue";

// Styles

const useStyles = makeStyles((theme) => ({
  searchInput: {},
}));

export default function Search() {
  const history = useHistory();

  // const [isFocused, setIsFocused] = useState(false);
  // const [startingLocation, setStartingLocation] = useState("");

  // const loc = history.location.pathname;

  // const handleFocusState = () => {
  //   setIsFocused(true);
  //   setStartingLocation(history.location.pathname);
  //   // startingLocation = history.location.pathname;
  //   history.push(startingLocation);
  // };

  // const handleSubmit = (e) => {
  //   history.location.pathname = "/";

  //   console.log("starting location", startingLocation);

  //   const url = new URLSearchParams({
  //     query: e.target.value,
  //   });
  //   // if (!isFocused) return history.push(`search?${url}`);

  //   history.replace(!e.target.value ? startingLocation : `search?${url}`);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    history.location.pathname = "/";

    const inputValue = event.target[0].value;

    const url = new URLSearchParams({
      query: inputValue,
      media_type: "movie",
    });
    history.push(`search?${url}`);

    event.target[0].value = "";
  };

  // TODO error handler
  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Input
          type="search"
          label="Search field"
          style={{
            borderBottom: "1px solid #e2e2e1",
            color: "#e2e2e1",
            paddingLeft: ".5rem",
          }}
          placeholder="Search"

          // onFocus={() => handleFocusState()}
          // onBlur={() => setIsFocused(false)}
          // onChange={(event) => handleSubmit(event)}
        />
        {/* <TextField
          id="standard-search"
          label="Search field"
          type="search"
          required
        /> */}
        <Button
          style={{
            minWidth: "40px",
            minHeight: "40px",
          }}
          variant="outlined"
          type="submit"
          color="secondary"
        >
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
}
