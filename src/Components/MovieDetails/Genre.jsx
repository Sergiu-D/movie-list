import React, { useState, useEffect, useContext } from "react";

//Context
import { GenresContext } from "../../Context/GenresContext";

// Material-Ui
import { Container, Typography } from "@material-ui/core";

export default function Genre({ genreIds, mediaType }) {
  const [filteredGenres, setFilteredGenres] = useState([]);

  const { moviesGenres, showsGenres } = useContext(GenresContext);

  const genres = mediaType === "movie" ? moviesGenres : showsGenres;

  useEffect(() => {
    setFilteredGenres(
      genres.filter((genre) =>
        genreIds.some(
          (titleGenres) =>
            genre.id === titleGenres || genre.id === titleGenres.id
        )
      )
    );
  }, []);

  function getGenres() {
    const sortedGenresArr = [];
    filteredGenres.forEach((g) => sortedGenresArr.push(g.name));

    return sortedGenresArr.sort().join(" ");
  }

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        style={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          color: "#adb5bd",
          fontSize: "12px",
          lineHeight: "25px",
          wordSpacing: ".5ch",

          fontWeight: 100,
        }}
      >
        {getGenres()}
      </Typography>
    </Container>
  );
}
