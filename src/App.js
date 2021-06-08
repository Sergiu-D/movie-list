import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Material-Ui

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core";

// Components
import Navigation from "./Components/Navigation/Navigation";

// Pages
import Trending from "./Components/Pages/Trending";
import Newest from "./Components/Pages/Newest";
import Upcoming from "./Components/Pages/Upcoming";
import Discover from "./Components/Pages/Discover";
import Watchlist from "./Components/Pages/Watchlist";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

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
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navigation />

          <main style={{ overflowX: "hidden" }}>
            <Switch>
              <Route exact path="/">
                <Trending />
              </Route>
              <Route exact path="/trending">
                <Trending />
              </Route>
              <Route path="/newest">
                <Newest />
              </Route>
              <Route path="/upcoming">
                <Upcoming />
              </Route>
              <Route exact path="/discover">
                <Discover />
              </Route>
              <Route path="/watchlist">
                <Watchlist />
              </Route>
              <Route
                path={[
                  "/trending/:type/:id/:title",
                  "/discover/trending/:type/:id/:title",
                ]}
                component={MovieDetails}
              />
              {/* <Route path="/discover/:title" component={MovieDetails} /> */}
            </Switch>
          </main>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
