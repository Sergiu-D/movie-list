import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Material-Ui
import { TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// function sleep(delay = 0) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);

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
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Button
        variant="outlined"
        color="default"
        onClick={() => handleSearchBtn()}
      >
        <SearchIcon />
      </Button>
    </div>
  );
}
