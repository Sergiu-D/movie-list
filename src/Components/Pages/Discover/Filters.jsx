import React from "react";

// Material-Ui
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";

import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    borderColor: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const genres = [
  { id: 10759, name: "Action" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 10762, name: "Kids" },
  { id: 9648, name: "Mystery" },
  { id: 10763, name: "News" },
  { id: 10764, name: "Reality" },
  { id: 10766, name: "Soap" },
  { id: 10767, name: "Talk" },
  { id: 37, name: "Western" },
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Sci-Fi" },
  { id: 10770, name: "TV" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const Filters = ({
  isMovies,
  setIsMovies,
  sorting,
  setSorting,
  voteAverage,
  setVoteAverage,
  yearFilter,
  setYearFilter,
  genresIds,
  setGenresIds,
  refContainer,
}) => {
  const classes = useStyles();

  function createVoteCount() {
    const count = [];

    for (let i = 10; i >= 1; i--) {
      count.push(i);
    }
    return count;
  }

  // Year filter
  const yearsFilter = () => {
    const startYear = 1800;
    const endYear = new Date().getFullYear();
    const years = [];
    for (let i = endYear; i > startYear; i--) {
      years.push(i);
    }

    return years;
  };

  // Filter Genres

  const handleGenreIds = (arr) => {
    arr.forEach(
      (obj, index) =>
        (refContainer.current = [...new Set([...refContainer.current, obj])])
    );
  };

  const handleGenresOnClose = () => {
    setGenresIds(refContainer.current);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <FormControl className={classes.formControl}>
        <InputLabel id="media-type" style={{ color: "white" }}>
          Media type
        </InputLabel>
        <NativeSelect
          labelId="media-type"
          id="media-type-select"
          variant="standard"
          value={isMovies}
          style={{ color: "white" }}
          onChange={(event) => setIsMovies(event.target.value)}
        >
          <option value={true}>Movies</option>
          <option value={false}>Tv Shows</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="sort-by" style={{ color: "white" }}>
          Sort By
        </InputLabel>
        <NativeSelect
          labelId="sort-by"
          id="sort-by-select"
          variant="standard"
          value={sorting}
          style={{ color: "white" }}
          onChange={(event) => setSorting(event.target.value)}
        >
          <option value={"popularity.desc"}>Popularity High</option>
          <option value={"popularity.asc"}>Popularity Low</option>
          <option value={"release_date.desc"}>Release Date Newer</option>
          <option value={"release_date.asc"}>Release Date Older</option>
          <option value={"vote_average.desc"}>Vote Average High</option>
          <option value={"vote_average.asc"}>Vote Average Low</option>
          <option value={"vote_count.desc"}>Vote Count High</option>
          <option value={"vote_count.asc"}>Vote Count Low</option>
        </NativeSelect>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="vote-average" style={{ color: "white" }}>
          Vote Average
        </InputLabel>
        <NativeSelect
          labelId="vote-average"
          id="vote-average-select"
          variant="standard"
          value={voteAverage}
          style={{ color: "white" }}
          onChange={(obj, event, str) => setVoteAverage(event.props.value)}
        >
          {createVoteCount().map((number, index) => (
            <option key={index} value={number}>
              {number}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Select By Year</InputLabel>

        <Select
          labelId="select-by-year"
          id="select-by-year-select"
          variant="standard"
          multiple
          value={yearFilter}
          style={{ color: "white" }}
          // onChange={(obj, event) => setYearFilter(event.props.value)}
        >
          {/* <option value={0}>All</option> */}
          {yearsFilter().map((year, index) => (
            <MenuItem key={index} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        disableCloseOnSelect
        autoSelect
        // autoComplete
        includeInputInList
        multiple={true}
        limitTags={2}
        id="multiple-limit-tags"
        options={genres}
        getOptionLabel={(option) => option.name}
        // defaultValue={[genres[2], genres[1]]}
        // getOptionSelected={(opt, val) => {
        //   console.log("option ", opt);
        //   console.log("value ", val);
        // }}
        // filterOptions={(opt, state) => {
        //   console.log("option ", opt);
        //   console.log("state ", state);
        // }}
        onClose={() => {
          handleGenresOnClose();
        }}
        value={genresIds}
        onChange={(e, value) => handleGenreIds(value)}
        // onInputChange={(ev, val, res) => handleGenreIds(val)}
        // blurOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="limitTags"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
};

export default Filters;
