import React from "react";

// Material-Ui
import { Container, Typography } from "@material-ui/core";

export default function Genre({ genres, genreIds, mediaType }) {
  const [moviesGenres, showsGenres] = genres;

  // console.log("movies: ", moviesGenres);
  // console.log("shows: ", showsGenres);
  // console.log("Genre Ids: ", genreIds);
  // console.log("Media type: ", mediaType);

  function sortingGenreTitles() {
    if (mediaType === "movie")
      // return genreIds.map(
      //   (genreId, index) =>
      //     genreId === moviesGenres[index].id && moviesGenres[index].name
      // );
      return moviesGenres.map(
        (genre, index) => genre.id === genreIds[index] && genre.name
      );
    if (mediaType === "tv")
      return showsGenres.map(
        (genre, index) => genre.id === genreIds[index] && genre.name
      );
  }

  return (
    <Container>
      <Typography variant="subtitle2">
        {/* {moviesGenres.map((item, index) => console.log("item id: ", item.id))} */}
        {sortingGenreTitles()}
      </Typography>
    </Container>
  );
}
