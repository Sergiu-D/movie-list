import React, { createContext, useState } from "react";

export const WatchListContext = createContext();

export default function WatchListContextProvider(props) {
  const [list, setList] = useState([]);

  return (
    <WatchListContext.Provider value={{ list }}>
      {props.children}
    </WatchListContext.Provider>
  );
}
