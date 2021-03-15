import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Pages
import Trending from "./Components/Trending";
import Newest from "./Components/Newest";
import Upcoming from "./Components/Upcoming";
import Discover from "./Components/Discover";
import Watchlist from "./Components/Watchlist";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <nav>
          <ul>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
            <li>
              <Link to="/newest">Newest</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming</Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/watchlist">Watch list</Link>
            </li>
          </ul>
        </nav>

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
      </Router>
    </div>
  );
}

export default App;
