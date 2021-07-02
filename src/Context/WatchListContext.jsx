import React, { createContext, useState, useEffect } from "react";

// React toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const WatchListContext = createContext();

export default function WatchListContextProvider(props) {
  const initialList =
    JSON.parse(localStorage.getItem("movie-list-watchlist")) || [];
  const [list, setList] = useState(initialList);

  useEffect(() => {
    localStorage.setItem("movie-list-watchlist", JSON.stringify(list));
  }, [list]);

  const addItem = (movie) => {
    const mediaTitle = movie.original_title || movie.original_name;

    toast.success(
      <p style={{ textAlign: "center" }}>
        <b>{mediaTitle}</b> has been added to Watch List
      </p>,
      {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

    setList((prev) => [...prev, movie]);
  };

  const removeItem = (movie) => {
    const mediaTitle = movie.original_title || movie.original_name;
    toast.warn(
      <p style={{ textAlign: "center" }}>
        <b>{mediaTitle}</b> has been removed from Watch List
      </p>,
      {
        // position: "top-right",
        // autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

    setList(list.filter((item) => item.id !== movie.id));
  };

  return (
    <WatchListContext.Provider value={{ list, addItem, removeItem }}>
      {props.children}
    </WatchListContext.Provider>
  );
}
