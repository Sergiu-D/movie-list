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

export default function Filters({
  isMovies,
  setIsMovies,
  sorting,
  setSorting,
  voteAverage,
  setVoteAverage,
}) {
  const classes = useStyles();

  function createVoteCount() {
    const count = [];

    for (let i = 1; i <= 10; i++) {
      count.push(i);
    }
    return count;
  }
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="media-type">Media type</InputLabel>
        <Select
          labelId="media-type"
          id="media-type-select"
          variant="standard"
          value={isMovies}
          onChange={(event) => setIsMovies(event.target.value)}
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
          value={sorting}
          onChange={(event) => setSorting(event.target.value)}
        >
          <MenuItem value={"popularity.desc"}>Popularity High</MenuItem>
          <MenuItem value={"popularity.asc"}>Popularity Low</MenuItem>
          <MenuItem value={"release_date.desc"}>Release Date Newer</MenuItem>
          <MenuItem value={"release_date.asc"}>Release Date Older</MenuItem>
          <MenuItem value={"vote_average.desc"}>Vote Average High</MenuItem>
          <MenuItem value={"vote_average.asc"}>Vote Average Low</MenuItem>
          <MenuItem value={"vote_count.desc"}>Vote Count High</MenuItem>
          <MenuItem value={"vote_count.asc"}>Vote Count Low</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="sort-by">Vote Average</InputLabel>
        <Select
          labelId="sort-by"
          id="sort-by-select"
          variant="standard"
          value={voteAverage}
          onChange={(event) => setVoteAverage(event.target.value)}
        >
          {createVoteCount().map((number) => (
            <MenuItem value={number}>{number}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
