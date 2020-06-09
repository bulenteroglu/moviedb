import React from "react";
import UpcomingMovies from "../Movies/UpcomingMovies";

export function Homepage() {
  return (
    <section class='py-8'>
      <div class='container max-w-5xl mx-auto m-8'>
        <p class='text-gray-800 uppercase text-2xl font-extrabold tracking-wider'>
          Upcoming
        </p>
        <p class='text-gray-800 uppercase text-xl font-thin tracking-wider'>
          Movies
        </p>
        <UpcomingMovies />
      </div>
    </section>
  );
}
