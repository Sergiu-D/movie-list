import React from "react";

// Components
import DiscoverFetcher from "./DiscoverFetcher";
import Filters from "./Filters";
import PageTitle from "../../PageTitle";

// Context
import GenresContextProvider from "../../../Context/GenresContext";

export default function Discover() {
  return (
    <>
      <PageTitle pageTitle={"Discover"} />
      <GenresContextProvider>
        <Filters />
      </GenresContextProvider>
      <DiscoverFetcher />
    </>
  );
}
