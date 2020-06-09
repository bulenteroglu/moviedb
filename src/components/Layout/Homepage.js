import React from "react";
import UpcomingMovies from "../Movies/UpcomingMovies";

export function Homepage() {
  return (
    <section class='bg-white py-8'>
      <div class='container max-w-5xl mx-auto m-8'>
        <h1 class='w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800'>
          Homepage
        </h1>
        <div class='w-full mb-4'>
          <div class='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
        </div>
        <UpcomingMovies />
      </div>
    </section>
  );
}
