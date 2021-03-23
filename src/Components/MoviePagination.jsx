import React, { useState } from "react";

// Utils
import InfiniteScroll from "react-infinite-scroll-component";

// Components
import MovieCard from "./MovieCard/MovieCard";

export default function MoviePagination({ data }) {
  const copyData = [...data];
  let slicedData = copyData.slice(0, 20);

  const [newData, setNewData] = useState({
    items: slicedData,
    hasMore: true,
  });
  const [itemsPerCall, setItemsPerCall] = useState(20);

  const fetchMoreData = () => {
    console.log("Next");
  };

  // useEffect(() => {
  //   fetchingData();
  // }, []);
  // const [data] = fetchingData();
  return (
    <div>
      <InfiniteScroll
        style={{
          display: "flex",
          width: "1620px",
          justifyContent: "space-around",
          flexWrap: "wrap",
          overflowX: "hidden",
        }}
        dataLength={newData.items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={<p style={{ textAlign: "center" }}>This is the end!</p>}
        // pullDownToRefresh={true}
        // pullDownToRefreshThreshold={20}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        // }
      >
        {newData.items.map((item) => {
          return <MovieCard {...item} key={item.id} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
