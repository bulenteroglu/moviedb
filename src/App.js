import React, { useState, useEffect } from "react";
import { Navbar } from "./components";
import { BrowserRouter, Route } from "react-router-dom";
import TopMovies from "./components/Movies/TopMovies";
import UpcomigMovies from "./components/Movies/UpcomingMovies";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import NowPlaying from "./components/Movies/NowPlaying";
import ActorDetail from "./components/Actor/ActorDetail";
import AiringToday from "./components/TV/AiringToday";
import PopularTV from "./components/TV/PopularShows";
import TopRatedShows from "./components/TV/TopRated";
import TVDetail from "./components/TV/TVDetail";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='font-sans bg-gray-900 text-white'>
        <Navbar />
        <Route path='/movie/:id' component={MovieDetail} />
        <Route path='/discover/Upcoming' component={UpcomigMovies} />
        <Route path='/discover/top-rated' component={TopMovies} />
        <Route path='/discover/now-playing' component={NowPlaying} />
        <Route path='/discover/tv/airing-today' component={AiringToday} />
        <Route path='/discover/tv/popular' component={PopularTV} />
        <Route path='/discover/tv/top-rated' component={TopRatedShows} />
        <Route path='/tv/:id' component={TVDetail} />
        <Route path='/actor/:id' component={ActorDetail} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
