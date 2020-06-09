import React from "react";
import NotFound from "../../Utils/img/no-image-found.png";
import Moment from "react-moment";
import StarRatings from "react-star-ratings";

export function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <div class='w-full p-5 md:w-1/2 lg:w-1/3'>
      <article class='overflow-hidden rounded-lg shadow-2xl'>
        <a href='#'>
          <img
            alt='Placeholder'
            class='block h-auto w-full'
            src={
              !movie.poster_path
                ? NotFound
                : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }
          />
        </a>

        <header class='flex items-center justify-between leading-tight p-2 md:p-4'>
          <h1 class='text-lg'>
            <a class='no-underline hover:underline text-black' href='#'>
              {movie.title}
            </a>
          </h1>
          <p class='text-grey-darker text-sm'>
            {" "}
            <Moment fromNow>{movie.release_date}</Moment>
          </p>
        </header>

        <footer class='flex items-center justify-between leading-none p-2 md:p-4'>
          <div class='items-center m-auto '>
            <StarRatings
              rating={Math.floor(movie.vote_average / 2)}
              starRatedColor='#ffafbd'
              numberOfStars={5}
              name='rating'
              starDimension='20px'
              starSpacing='5px'
            />
          </div>
        </footer>
      </article>
    </div>
  );
}
