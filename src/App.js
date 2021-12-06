import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Utils
import useSWR from "swr";
import { fetcher } from "./Utils/fetchingQuery";

// Material-Ui

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
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
import Search from "./Components/Pages/Search";
import ContentDetails from "./Components/ContentDetails/ContentDetails";

// Context
import WatchListContextProvider from "./Context/WatchListContext";

let theme = createMuiTheme({
  typography: {
    htmlFontSize: 20,
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const { data, error } = useSWR(` https://ip.nf/me.json`, fetcher);
  if (!data) return <h1>Loading...</h1>;
  if (error) return <h1>Error!!!</h1>;

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
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/watchlist" component={Watchlist} />
                <Route exact path="/search" component={Search} />

                <Route
                  exact
                  path={[
                    "/search/selected",
                    "/trending/selected",
                    "/newest/selected",
                    "/upcoming/selected",
                    "/discover/selected",
                    "/watchlist/selected",
                    "/recommended/selected",
                  ]}
                  component={ContentDetails}
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
