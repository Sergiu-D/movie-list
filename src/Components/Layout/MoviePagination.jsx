import React from "react";

// Components
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../MovieCard/MovieCard";
import { GridContainer, GridItem } from "./Grid";

import { BackToTopBtn } from "../Buttons";

// Material-Ui
import { Grid, CircularProgress } from "@material-ui/core";

// TODO add "back to top button"

export default function MoviePagination({ media, setSize, totalResults }) {
  const handleFetchMovies = () => setSize((prev) => prev + 2);

  const handleHasMore = (tr, ml) => {
    const hasMore = tr === ml ? false : true;

    return hasMore;
  };

  return (
    <>
      <InfiniteScroll
        style={{ paddingTop: "1rem", overflowX: "hidden" }}
        dataLength={media.length}
        next={handleFetchMovies}
        hasMore={handleHasMore(totalResults, media.length)}
        loader={
          <h3 style={{ textAlign: "center", padding: "2rem 0" }}>Loading...</h3>
        }
        endMessage={
          <p
            style={{ display: "block", textAlign: "center", padding: "2rem 0" }}
          >
            <b>You have seen it all</b>
          </p>
        }
      >
        <GridContainer>
          {media.map((movie, index) => {
            return (
              <GridItem index={index}>
                <MovieCard movie={movie} key={movie.id} />
              </GridItem>
            );
          })}
        </GridContainer>
      </InfiniteScroll>
      <BackToTopBtn />
    </>
  );
}
