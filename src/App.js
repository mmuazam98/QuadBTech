import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieContext from "./MovieContext";
import axios from "axios";
const App = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setShows(response.data);
    };
    fetchShows();
  }, []);
  return (
    <MovieContext.Provider value={{ shows, setShows }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/:id" exact>
            <MovieInfo />
          </Route>
        </Switch>
      </Router>
    </MovieContext.Provider>
  );
};

export default App;
