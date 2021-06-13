import axios from "axios";
import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// Material-Ui
import { TextField, Button, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import blue from "@material-ui/core/colors/blue";

// Styles

const useStyles = makeStyles((theme) => ({
  searchInput: {},
}));

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  const classes = useStyles();

  function handleSearchBtn() {
    let cancel;
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}`,
      params: { query: searchInput },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    }).then((res) => {
      setSearchData(res.data.results);
    });
    return () => cancel();
  }
  // TODO error handler
  return (
    <div style={{ display: "flex" }}>
      <TextField
        label="search"
        variant="filled"
        color="blue[50]"
        // className={classes.searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Button variant="outlined" onClick={() => handleSearchBtn()}>
        <SearchIcon />
      </Button>
    </div>
  );
}
