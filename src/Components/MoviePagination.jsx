import React from "react";

// import useSWR from "swr";
// import fetcher from "../Utils/fetcher";

// Utils
import InfiniteScroll from "react-infinite-scroll-component";

// Components
import MovieCard from "./MovieCard/MovieCard";

// Material-Ui
import { Grid } from "@material-ui/core";

// import { useParams } from "react-router-dom";

// TODO add "back to top button"

export default function MoviePagination({ movies, pageNum, setPageNum }) {
  const handleFetchMovies = () => setPageNum((prevPage) => prevPage + 1);

  return (
    <div>
      <InfiniteScroll
        style={{ paddingRight: "1rem", paddingTop: "1rem" }}
        dataLength={movies.length}
        next={handleFetchMovies}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid container spacing={3} justify="flex-start">
          {movies.map((movie, index) => {
            if (!movie.release_date) return;
            return (
              <Grid item xs={4} sm={3} md={3} lg={2} key={index}>
                <MovieCard {...movie} key={movie.id} />
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </div>
  );
}
