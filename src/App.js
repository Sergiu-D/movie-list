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
import Filters from "./Components/Filters";

// Pages
import Trending from "./Components/Pages/Trending";
import Newest from "./Components/Pages/Newest";
import Upcoming from "./Components/Pages/Upcoming";
import Discover from "./Components/Pages/Discover/Discover";
import Watchlist from "./Components/Pages/Watchlist";
import Search from "./Components/Pages/Search";
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
              maxWidth: "100vw",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              flexGrow: "2",
              padding: "0 .5rem",
            }}
          >
            <Switch>
              <WatchListContextProvider>
                <Route exact path="/">
                  <Redirect exact to="/trending" />
                </Route>
                <Route exact path="/trending" component={Trending} />
                <Route exact path="/newest" component={Newest} />
                <Route exact path="/upcoming" component={Upcoming} />
                <Route exact path="/discover">
                  {/* <Filters /> */}
                  <Discover />
                </Route>
                <Route exact path="/watchlist" component={Watchlist} />

                <Route exact path="/search" component={Search} />

                <Route
                  exact
                  path={[
                    "/search/:type/:id/:title",
                    "/trending/:type/:id/:title",
                    "/newest/:type/:id/:title",
                    "/upcoming/:id/:title",
                    "/discover/:type/:id/:title",
                    "/watchlist/:type/:id/:title",
                  ]}
                  component={MovieDetails}
                />
              </WatchListContextProvider>
            </Switch>
          </main>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
