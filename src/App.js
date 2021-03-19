import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navigation from "./Components/Navigation/Navigation";

// Pages
import Trending from "./Components/Pages/Trending";
import Newest from "./Components/Pages/Newest";
import Upcoming from "./Components/Pages/Upcoming";
import Discover from "./Components/Pages/Discover";
import Watchlist from "./Components/Pages/Watchlist";

// Material Ui

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <main>
          <Switch>
            <Route exact path="/">
              <Trending />
            </Route>
            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/newest">
              <Newest />
            </Route>
            <Route path="/upcoming">
              <Upcoming />
            </Route>
            <Route path="/discover">
              <Discover />
            </Route>
            <Route path="/watchlist">
              <Watchlist />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
