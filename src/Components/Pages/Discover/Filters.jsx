import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createBrowserHistory } from "history";

// Components
import PageTitle from "../../PageTitle";

// Material Ui
import { makeStyles, Select, InputLabel, FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  formControl: {
    minWidth: 150,
    margin: "2rem 0",
  },
}));

export default function Filters({ pageTitle }) {
  const classes = useStyles();
  const history = useHistory();

  // Default values if history search query is empty
  const defaultParams = {
    media_type: "movie",
    sort_by: "vote_count.desc",
  };

  // Check history search query
  const searchQuery = !history.location.search
    ? defaultParams
    : history.location.search;

  // Set state with previous search query
  useEffect(() => {
    const urlQuery = new URLSearchParams(searchQuery);

    for (let param of urlQuery.entries()) {
      setFiltersValues((prev) => ({ ...prev, [param[0]]: param[1] }));
    }
  }, []);

  const [filtersValues, setFiltersValues] = useState({});

  // Function to remove empty queries
  const removingEmptySearchQuery = (obj) => {
    for (let propName in obj) {
      if (
        obj[propName] === "" ||
        obj[propName] === null ||
        obj[propName] === undefined
      ) {
        delete obj[propName];
      }
    }
    return obj;
  };

  // Push URL to stack
  const url = new URLSearchParams(removingEmptySearchQuery(filtersValues));

  useEffect(() => {
    history.push({
      pathname: `discover`,
      search: `?${url.toString()}`,
      state: { ...filtersValues },
    });
  }, [filtersValues]);

  const params = [{ media_type: "movie" }];

  // Function that sets the state with selected values
  const handleChange = (event) => {
    event.preventDefault();
    const key = event.target.id;
    const value = event.target.value;

    setFiltersValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Function that generates vote averages
  const generateVoteAverage = (from) => {
    const voteAverage = [];

    for (let i = from; i >= 1; i--) {
      voteAverage.push(i);
    }

    return voteAverage;
  };

  // Function that generates years
  const generateYears = (from) => {
    const years = [];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i > from; i--) {
      years.push(i);
    }

    return years;
  };
  return (
    <>
      <PageTitle pageTitle="Discover" />
      <div className={classes.wrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel id="media_type-select">Media Type</InputLabel>
          <Select
            labelId="media_type-select"
            id="media_type"
            native
            value={filtersValues.media_type}
            onChange={handleChange}
          >
            <option value="movie">Movies</option>
            <option value="tv">Tv Shows</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="sort_by-select">Sort By</InputLabel>
          <Select
            labelId="sort_by-select"
            id="sort_by"
            native
            value={filtersValues.sort_by}
            onChange={handleChange}
          >
            <option value="popularity.desc">Popularity High</option>
            <option value="popularity.asc">Popularity Low</option>
            <option value="release_date.desc">Release Date Newer</option>
            <option value="release_date.asc">Release Date Older</option>
            <option value="vote_average.desc">Vote Average High</option>
            <option value="vote_average.asc">Vote Average Low</option>
            <option value="vote_count.desc">Vote Count High</option>
            <option value="vote_count.asc">Vote Count Low</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="vote_average-select">Vote Average</InputLabel>
          <Select
            labelId="vote_average-select"
            id="vote_average"
            native
            value={filtersValues.vote_average}
            onChange={handleChange}
          >
            <option aria-label="None" />
            <option label="All" value="" />
            {generateVoteAverage(10).map((vote, index) => (
              <option key={index} value={vote}>
                {vote}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="year-select">Year</InputLabel>
          <Select
            labelId="year-select"
            id="year"
            native
            value={filtersValues.year}
            onChange={handleChange}
          >
            <option aria-label="None" />
            <option label="All" value="" />
            {generateYears(1900).map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
