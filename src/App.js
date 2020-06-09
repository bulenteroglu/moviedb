import React from "react";
import { Navbar, Homepage } from "./components";
import { BrowserRouter, Route } from "react-router-dom";
import TopMovies from "./components/Movies/TopMovies";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/discover/Upcoming' component={Homepage} />
      <Route path='/discover/top rated' component={TopMovies} />
    </BrowserRouter>
  );
};

export default App;
