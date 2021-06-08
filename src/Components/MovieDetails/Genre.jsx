import React, { useState, useEffect } from "react";

// Material-Ui
import { Container, Typography } from "@material-ui/core";

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

export default function Genre({ genreIds, mediaType }) {
  const [filteredGenres, setFilteredGenres] = useState([]);
  // const [arrGen, setArrGen] = useState([]);

  // const [moviesGenres, showsGenres] = genres;

  // console.log("Genres: ", genres);

  // console.log("movies: ", moviesGenres);
  // console.log("shows: ", showsGenres);
  // console.log("Genre Ids: ", genreIds);
  // console.log("Media type: ", mediaType);

  // useEffect(() => {
  //   setArrGen(genres);
  // }, []);

  useEffect(() => {
    // if (mediaType === "movie")
    //   return
    setFilteredGenres(
      genres.filter((allGenres) =>
        genreIds.some((titleGenres) => allGenres.id === titleGenres)
      )
    );

    // if (mediaType === "tv")
    //   return setFilteredGenres(
    //     showsGenres.filter((allGenres) =>
    //       genreIds.some((titleGenres) => allGenres.id === titleGenres)
    //     )
    //   );
  }, [genreIds]);

  function getGenres() {
    const sortedGenresArr = [];
    filteredGenres.forEach((g) => sortedGenresArr.push(g.name));

    // sortedGenresArr.splice(0, 3).sort();
    // shortGenres.join(", ");
    // console.log(shortGenres.join(", "));
    return sortedGenresArr.splice(0, 3).sort();
  }

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {getGenres().map((g, index) => (
        <Typography
          key={index}
          variant="subtitle2"
          style={{
            color: "#adb5bd",
            fontSize: "12px",
            lineHeight: "25px",

            fontStyle: "italic",
            fontWeight: 100,
          }}
        >
          {" "}
          {g}&nbsp;&nbsp;
        </Typography>
      ))}
    </Container>
  );
}
