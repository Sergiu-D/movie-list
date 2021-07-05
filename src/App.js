import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Material-Ui

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  useMediaQuery,
} from "@material-ui/core";

// React toastify

import { ToastContainer } from "react-toastify";

// Components
import Navigation from "./Components/Navigation/Navigation";

// Pages
import Trending from "./Components/Pages/Trending";
import Newest from "./Components/Pages/Newest";
import Upcoming from "./Components/Pages/Upcoming";
import Discover from "./Components/Pages/Discover/Discover";
import Watchlist from "./Components/Pages/Watchlist";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

// Context
import WatchListContextProvider from "./Context/WatchListContext";

let theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 20,
  },
});
theme = responsiveFontSizes(theme);

// theme.typography.h5 = {
//   [theme.breakpoints.down("md")]: {
//     fontSize: "1rem",
//   },
//   [theme.breakpoints.down("sm")]: {
//     fontSize: ".8rem",
//   },
// };

function App() {
  return (
    <div
      className="App"
      style={{
        maxWidth: "100vw",
        display: "flex",
        // overflowX: "hidden",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        // newestOnTop={}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
      <MuiThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Navigation />

          <main
            style={{
              flexGrow: "2",
              maxWidth: "100vw",
              padding: "0 .5rem",
            }}
          >
            <Switch>
              <WatchListContextProvider>
                <Route exact path="/">
                  <Redirect exact to="/trending" />
                </Route>
                <Route exact path="/trending">
                  <Trending />
                </Route>
                <Route exact path="/newest">
                  <Newest />
                </Route>
                <Route exact path="/upcoming">
                  <Upcoming />
                </Route>
                <Route exact path="/discover">
                  <Discover />
                </Route>
                <Route exact path="/watchlist">
                  <Watchlist />
                </Route>
                <Route
                  path={[
                    "/trending/:type/:id/:title",
                    "/newest/:type/:id/:title",
                    "/upcoming/:id/:title",
                    "/discover/:type/:id/:title",
                    "/watchlist/:type/:id/:title",
                  ]}
                  component={MovieDetails}
                />
              </WatchListContextProvider>
              {/* <Route path="/discover/:title" component={MovieDetails} /> */}
            </Switch>
          </main>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
