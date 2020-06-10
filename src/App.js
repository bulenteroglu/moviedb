import React from "react";
import { Navbar, Homepage } from "./components";
import { BrowserRouter, Route } from "react-router-dom";
import TopMovies from "./components/Movies/TopMovies";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div className='font-sans bg-gray-900 text-white'>
        <Navbar />
        <Route path='/movie/:id' component={MovieDetail} />
        <Route path='/discover/Upcoming' component={Homepage} />
        <Route path='/discover/top-rated' component={TopMovies} />
      </div>
    </BrowserRouter>
  );
};

export default App;
