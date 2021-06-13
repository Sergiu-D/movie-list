import React from "react";

// Material-Ui
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Filters({ filters, setFilters, sorting, setSorting }) {
  const classes = useStyles();

  const { isMovies } = filters;
  const { sort_by } = sorting;

  // const handleChange = (event) => {
  //   console.log(
  //     "🚀 ~ file: Filters.jsx ~ line 28 ~ handleChange ~ event.target.value",
  //     event
  //   );
  //   setFilters({ isMovie: event.target.value });
  // };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="media-type">Media type</InputLabel>
        <Select
          labelId="media-type"
          id="media-type-select"
          variant="standard"
          value={isMovies}
          onChange={(event) => setFilters({ isMovies: event.target.value })}
        >
          <MenuItem value={true}>Movies</MenuItem>
          <MenuItem value={false}>Tv Shows</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="sort-by">Sort By</InputLabel>
        <Select
          labelId="sort-by"
          id="sort-by-select"
          variant="standard"
          value={sort_by}
          onChange={(event) => setSorting({ sort_by: event.target.value })}
        >
          <MenuItem value={"popularity.desc"}>Popularity High</MenuItem>
          <MenuItem value={"popularity.asc"}>Popularity Low</MenuItem>
          <MenuItem value={"release_date.desc"}>Release Date Newer</MenuItem>
          <MenuItem value={"release_date.asc"}>Release Date Older</MenuItem>
          <MenuItem value={"vote_average.desc"}>Vote Average High</MenuItem>
          <MenuItem value={"vote_average.asc"}>Vote Average Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
