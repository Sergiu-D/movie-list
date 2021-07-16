import React, { useContext } from "react";

// Components
import ContentCard from "../ContentCard/ContentCard";
import PageTitle from "../PageTitle";
import { GridContainer, GridItem } from "../Layout/Grid";

// Context
import { WatchListContext } from "../../Context/WatchListContext";

const Watchlist = () => {
  // Change document title
  document.title = "Watch list";

  const { list } = useContext(WatchListContext);

  return (
    <>
      <PageTitle pageTitle="Watch list" />
      {list.length === 0 ? (
        <h2
          style={{
            fontWeight: "300",
            margin: "auto",
            opacity: ".5",
          }}
        >
          Nothing here yet
        </h2>
      ) : (
        <GridContainer>
          {list.map((movie) => {
            return (
              <GridItem key={movie.id}>
                <ContentCard movie={movie} />
              </GridItem>
            );
          })}
        </GridContainer>
      )}
    </>
  );
};

export default Watchlist;
