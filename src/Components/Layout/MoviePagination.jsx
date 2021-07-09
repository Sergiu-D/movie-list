import React from "react";

// Components
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../MovieCard/MovieCard";
import { GridContainer, GridItem } from "./Grid";

import { BackToTopBtn } from "../Buttons";

// Spinner
import PulseLoader from "react-spinners/PulseLoader";

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
          <div style={{ display: "flex" }}>
            {" "}
            <PulseLoader
              color="RGB(240, 5, 75)"
              css={"margin: 1rem auto;"}
              size={10}
            />{" "}
          </div>
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
