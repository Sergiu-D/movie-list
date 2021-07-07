import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

// Components
import MoviePagination from "../Layout/MoviePagination";
import { GridContainer, GridItem } from "../Layout/Grid";
import MovieCard from "../MovieCard/MovieCard";

// Material-Ui
import { TextField, Button, makeStyles, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import blue from "@material-ui/core/colors/blue";

// Styles

const useStyles = makeStyles((theme) => ({
  searchInput: {},
}));

export default function Search() {
  // const [searchInput, setSearchInput] = useState("");
  // const [searchData, setSearchData] = useState([]);

  const history = useHistory();

  // const classes = useStyles();

  // function handleSubmit() {

  //   let cancel;

  //   axios({
  //     method: "get",
  //     url: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}`,
  //     params: { query: searchInput },
  //     cancelToken: new axios.CancelToken((c) => (cancel = c)),
  //   }).then((res) => {
  //     setSearchData(res.data.results);
  //   });
  //   return () => cancel();
  // }

  // useEffect(() => {
  //   let cancel;

  //   axios({
  //     method: "get",
  //     url: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}`,
  //     // params: { query: searchInput },
  //     cancelToken: new axios.CancelToken((c) => (cancel = c)),
  //   }).then((res) => {
  //     setSearchData(res.data.results);
  //   });
  //   return () => cancel();
  // }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // // setSearchData(res.data.results);
    // setSearchInput(e.target[0].value);
    // // if (e.target[0].value) return history.go(`search/${e.target[0].value}`);
    // const query = `/search?query=${e.target[0].value}`;
    const url = new URLSearchParams({ query: e.target[0].value });
    history.push(`search?${url}`);
    // console.log(
    //   "🚀 ~ file: SearchInput.jsx ~ line 71 ~ handleSubmit ~ url",
    //   url.toString()
    // );
  };

  // TODO error handler
  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Input
          style={{
            borderBottom: "1px solid #e2e2e1",
            color: "#e2e2e1",
            overflow: "hidden",
            // borderRadius: 4,
            // backgroundColor: "#fcfcfb",
          }}
          placeholder="Search"
          inputProps={{ "aria-label": "description" }}
          // onChange={(event) => handleSubmit(event)}
        />
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
