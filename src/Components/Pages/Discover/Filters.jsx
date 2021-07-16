import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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

  const defaultParams = {
    media_type: "movie",
    sort_by: "vote_count.desc",
  };

  const searchQuery = !history.location.search
    ? defaultParams
    : history.location.search;

  useEffect(() => {
    const urlQuery = new URLSearchParams(searchQuery);

    for (let param of urlQuery.entries()) {
      setFiltersValues((prev) => ({ ...prev, [param[0]]: param[1] }));
    }
  }, []);

  // const getParams = (url) => {
  //   const params = [];

  //   for (let param of url.entries()) {
  //     params.push({ ...params, [param[0]]: param[1] });
  //   }

  //   return params;
  // };

  // console.log(
  //   "🚀 ~ file: Filters.jsx ~ line 37 ~ Filters ~ ...getParams(url)",
  //   ...getParams(url)
  // );

  const [filtersValues, setFiltersValues] = useState({});

  const url = new URLSearchParams(filtersValues);

  useEffect(() => {
    history.push(`/discover?${url.toString()}`);
  }, [filtersValues]);

  const params = [{ media_type: "movie" }];

  const handleChange = (event) => {
    event.preventDefault();
    const key = event.target.id;
    const value = event.target.value;

    // url.set({ [key]: value });

    // const url = new URLSearchParams(filtersValues);

    // console.log(
    //   "🚀 ~ file: Filters.jsx ~ line 63 ~ handleChange ~ url.toString()",
    //   url.toString()
    // );
    // history.push(`/discover?${url.toString()}`);

    // const url = new URLSearchParams({

    //   media_type: "movie",
    //   [key]: value,
    // });

    setFiltersValues((prev) => ({
      ...prev,
      [key]: value,
    }));

    // url.set(key, value);
    // console.log(
    //   "🚀 ~ file: Filters.jsx ~ line 43 ~ handleChange ~ url",
    //   url.toString()
    // );

    // history.push(`/discover?${url.toString()}`, { ...filtersValues });
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
            <option aria-label="None" value="" />
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
          <InputLabel id="vote_average-select">Vote Average</InputLabel>
          <Select
            labelId="vote_average-select"
            id="vote_average"
            native
            value={filtersValues.vote_average}
            onChange={handleChange}
          >
            <option aria-label="None" value="" />
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
            <option aria-label="None" value="" />
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
