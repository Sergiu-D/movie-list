import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export default function WatchListContextProvider(props) {
  const initialList =
    JSON.parse(localStorage.getItem("movie-list-watchlist")) || [];
  const [list, setList] = useState(initialList);

  useEffect(() => {
    localStorage.setItem("movie-list-watchlist", JSON.stringify(list));
  }, [list]);

  const addItem = (movie) => {
    setList((prev) => [...prev, movie]);
  };

  const removeItem = (movie) => {
    setList(list.filter((item) => item.id !== movie.id));
  };

  return (
    <WatchListContext.Provider value={{ list, addItem, removeItem }}>
      {props.children}
    </WatchListContext.Provider>
  );
}
