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

export default function Filters({ filters, setFilters }) {
  const classes = useStyles();

  const { isMovies, sort_by } = filters;

  const handleChange = (event) => {
    setFilters({ isMovies: event.target.value });
    console.log(
      "🚀 ~ file: Filters.jsx ~ line 28 ~ handleChange ~ event.target.value",
      event.target.value
    );
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Media type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="standard"
          value={isMovies}
          onChange={handleChange}
        >
          <MenuItem value={true}>Movies</MenuItem>
          <MenuItem value={false}>Tv Shows</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
