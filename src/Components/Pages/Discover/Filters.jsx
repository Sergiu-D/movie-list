import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Material Ui
import { makeStyles, Select, InputLabel, FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  formControl: {
    minWidth: 150,
    margin: "2rem 0",
  },
}));

export default function Filters() {
  const classes = useStyles();
  const history = useHistory();

  const [filtersValues, setFiltersValues] = useState({ media_type: "movie" });

  const url = new URLSearchParams(filtersValues);

  useEffect(() => {
    history.replace(`/discover?${url.toString()}`);
  }, [filtersValues]);

  const handleChange = (event) => {
    event.preventDefault();
    const key = event.target.id;
    const value = event.target.value;

    setFiltersValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const generateVoteAverage = (from) => {
    const voteAverage = [];

    for (let i = from; i >= 1; i--) {
      voteAverage.push(i);
    }

    return voteAverage;
  };

  const generateYears = (from) => {
    const years = [];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i > from; i--) {
      years.push(i);
    }

    return years;
  };
  return (
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
          <option aria-label="None" value="" />
          <option value="movie">Movies</option>
          <option value="tv">Tv Shows</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="sort-by-select">Sort By</InputLabel>
        <Select
          labelId="sort-by-select"
          id="sort-by"
          native
          value={filtersValues.sort_by}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
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
        <InputLabel id="vote-average-select">Vote Average</InputLabel>
        <Select
          labelId="vote-average-select"
          id="vote-average"
          native
          value={filtersValues.vote_average}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          {generateVoteAverage(10).map((vote) => (
            <option value={vote}>{vote}</option>
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
          <option aria-label="None" value="" />
          {generateYears(1900).map((year) => (
            <option value={year}>{year}</option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
