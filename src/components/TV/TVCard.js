import React from "react";
import NotFound from "../../Utils/img/no-image-found.png";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export function TVCard({ movie }) {
  if (!movie) return null;

  return (
    <div className='mt-8'>
      <Link to={`/tv/${movie.id}`}>
        <img
          alt='Placeholder'
          className='transition-opacity duration-1000 ease-out opacity-75 hover:opacity-100'
          src={
            !movie.poster_path
              ? NotFound
              : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          }
        />
        <div className='mt-2'>
          <div href='' className='text-lg mt-2 hover:text-gray:300'>
            {movie.name}
          </div>

          <div className='flex items-center text-gray-400 text-sm mt-1'>
            <span>
              <svg
                className='fill-current text-orange-500 w-4'
                id='icon-star-full'
                viewBox='0 0 32 32'
              >
                <path d='M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z'></path>
              </svg>
            </span>
            <span className='ml-1'>{movie.vote_average * 10}%</span>
            <span className='mx-2'>|</span>
            <span>
              {" "}
              <Moment format='MMM D, YYYY'>{movie.first_air_date}</Moment>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
