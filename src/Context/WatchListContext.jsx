import React, { createContext, useState, useEffect } from "react";

// React toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const WatchListContext = createContext();

export default function WatchListContextProvider(props) {
  // Get list from local storage
  const initialList =
    JSON.parse(localStorage.getItem("movie-list_watchlist")) || [];

  const [list, setList] = useState(initialList);

  // Save list to local storage
  useEffect(() => {
    localStorage.setItem("movie-list_watchlist", JSON.stringify(list));
  }, [list]);

  // Toast notification options
  const notificationsOptions = {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  // Context state actions
  const addItem = (movie) => {
    const mediaTitle = movie.title || movie.name;

    toast.success(
      <p style={{ textAlign: "center" }}>
        <b>{mediaTitle}</b> has been added to Watch List
      </p>,
      notificationsOptions
    );

    setList((prev) => [...prev, movie]);
  };

  const removeItem = (movie) => {
    const mediaTitle = movie.title || movie.name;

    toast.warn(
      <p style={{ textAlign: "center" }}>
        <b>{mediaTitle}</b> has been removed from Watch List
      </p>,
      notificationsOptions
    );

    setList(list.filter((item) => item.id !== movie.id));
  };

  return (
    <WatchListContext.Provider value={{ list, addItem, removeItem }}>
      {props.children}
    </WatchListContext.Provider>
  );
}
