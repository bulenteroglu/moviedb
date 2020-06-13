import React from "react";
import { Navbar, Homepage } from "./components";
import { BrowserRouter, Route } from "react-router-dom";
import TopMovies from "./components/Movies/TopMovies";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import NowPlaying from "./components/Movies/NowPlaying";
import ActorDetail from "./components/Actor/ActorDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div className='font-sans bg-gray-900 text-white'>
        <Navbar />
        <Route path='/movie/:id' component={MovieDetail} />
        <Route path='/discover/Upcoming' component={Homepage} />
        <Route path='/discover/top-rated' component={TopMovies} />
        <Route path='/discover/now-playing' component={NowPlaying} />
        <Route path='/actor/:id' component={ActorDetail} />
      </div>
    </BrowserRouter>
  );
};

export default App;
