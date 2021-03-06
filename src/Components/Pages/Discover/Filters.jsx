import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//Context
import { GenresContext } from "../../../Context/GenresContext";

// Material Ui
import {
  makeStyles,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Input,
} from "@material-ui/core";

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

  selectInputsLabels: {
    color: "hsla(0,100%,100%,.6)",
    fontWeight: 800,
  },

  selectInputs: {
    color: "white",
    borderBottom: "1px solid white",

    "& .MuiSelect-icon": {
      fill: "white",
    },

    "& .MuiSelect-select:focus": {
      color: "black",
    },
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
      const key = param[0];
      const value = param[1];

      setFiltersValues((prev) => ({ ...prev, [key]: value }));
      if (key === "genres") setGenres(value.split(",").map((i) => +i));
    }
  }, []);

  const [filtersValues, setFiltersValues] = useState(defaultParams);
  const [genres, setGenres] = useState([]);

  // Function to remove empty queries
  const removingEmptySearchQuery = (obj) => {
    for (let propName in obj) {
      if (
        obj[propName] === "" ||
        obj[propName] === null ||
        obj[propName] === undefined ||
        obj[propName].length === 0
      ) {
        delete obj[propName];
      }
    }
    return obj;
  };

  // Push URL to stack
  const filtersQuery = { ...filtersValues, genres: genres };
  const url = new URLSearchParams(removingEmptySearchQuery(filtersQuery));

  useEffect(() => {
    history.push({
      pathname: `discover`,
      search: `?${url.toString()}`,
    });
  }, [filtersValues, genres]);

  // useEffect(() => {
  //   history.push({
  //     pathname: `discover`,
  //     search: `?${urlGenres.toString()}`,
  //   });
  // }, [genres]);

  // Function that sets the state with selected values
  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFiltersValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Get genres data from context
  const { moviesGenres, showsGenres } = useContext(GenresContext);

  const getGenres =
    filtersValues.media_type === "movie" ? moviesGenres : showsGenres;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "25%",
        width: 250,
      },
    },
  };

  const handleMultipleSelections = (event) => {
    const reset = event.target.value.some((num) => num === "all");
    if (reset) return setGenres([]);

    const values = Array.isArray(event.target.value) ? event.target.value : [];

    setGenres(values);
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
      <div className={classes.wrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="media_type-select"
            className={classes.selectInputsLabels}
          >
            Media Type
          </InputLabel>
          <Select
            labelId="media_type-select"
            id="media_type"
            className={classes.selectInputs}
            native
            className={classes.selectInputs}
            value={filtersValues.media_type}
            onChange={handleChange}
          >
            <option value="movie">Movies</option>
            <option value="tv">Tv Shows</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel
            className={classes.selectInputsLabels}
            id="sort_by-select"
          >
            Sort By
          </InputLabel>
          <Select
            labelId="sort_by-select"
            id="sort_by"
            native
            className={classes.selectInputs}
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
          <InputLabel
            className={classes.selectInputsLabels}
            id="vote_average-select"
          >
            Vote Average
          </InputLabel>
          <Select
            labelId="vote_average-select"
            id="vote_average"
            native
            className={classes.selectInputs}
            value={filtersValues.vote_average}
            onChange={handleChange}
          >
            <option aria-label="None" />
            <option label="All" value={0} />
            {generateVoteAverage(10).map((vote, index) => (
              <option key={index} value={vote}>
                {vote}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.selectInputsLabels} id="year-select">
            Year
          </InputLabel>
          <Select
            labelId="year-select"
            id="year"
            native
            className={classes.selectInputs}
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
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.selectInputsLabels} id="genres-select">
            Genres
          </InputLabel>
          <Select
            labelId="genres-select"
            id="genres"
            multiple
            className={classes.selectInputs}
            input={<Input />}
            MenuProps={MenuProps}
            value={genres}
            onChange={handleMultipleSelections}
          >
            <MenuItem aria-label="None" value="">
              {" "}
            </MenuItem>
            <MenuItem value="all">All</MenuItem>
            {getGenres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
