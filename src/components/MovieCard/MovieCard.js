import React from "react";
import NotFound from "../../Utils/img/no-image-found.png";
import Moment from "react-moment";
import StarRatings from "react-star-ratings";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function MovieCard({ movie }) {
  if (!movie) return null;

  console.log(movie);

  return (
    <div class='mt-8 shadow-lg'>
      <img
        alt='Placeholder'
        class='hover:opacity-75 transition ease-in-out duration-150'
        src={
          !movie.poster_path
            ? NotFound
            : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }
      />

      <div className='mt-2 p-4'>
        <a class='text-lg hover:text-gray:300' href='#'>
          {movie.title}
        </a>
        <div className='flex items-center text-gray-600 text-sm mt-1'>
          <span class='w-12'>
            {movie.vote_average * 10 >= 70 && (
              <CircularProgressbar
                value={movie.vote_average * 10}
                text={movie.vote_average ? movie.vote_average * 10 + "%" : "NR"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#081C22",
                  textColor: "#fff",
                  pathColor: "#21D07A",
                  trailColor: "#204529",
                })}
              />
            )}
            {movie.vote_average * 10 >= 31 && movie.vote_average * 10 <= 69 ? (
              <CircularProgressbar
                value={movie.vote_average * 10}
                text={movie.vote_average ? movie.vote_average * 10 + "%" : "NR"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#081C22",
                  textColor: "#fff",
                  pathColor: "#D2D531",
                  trailColor: "#423D0F",
                })}
              />
            ) : null}
            {movie.vote_average * 10 >= 1 && movie.vote_average * 10 <= 30 ? (
              <CircularProgressbar
                value={movie.vote_average * 10}
                text={movie.vote_average ? movie.vote_average * 10 + "%" : "NR"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#081C22",
                  textColor: "#fff",
                  pathColor: "#DB2360",
                  trailColor: "#571435",
                })}
              />
            ) : null}
            {!movie.vote_average ? (
              <CircularProgressbar
                value={movie.vote_average * 10}
                text={movie.vote_average ? movie.vote_average * 10 + "%" : "NR"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#081C22",
                  textColor: "#fff",
                  pathColor: "#666666",
                  trailColor: "#666666",
                })}
              />
            ) : null}
          </span>
        </div>

        {/* <div class='text-center'>
          <StarRatings
            rating={Math.floor(movie.vote_average / 2)}
            starRatedColor='#ffafbd'
            numberOfStars={5}
            name='rating'
            starDimension='20px'
            starSpacing='5px'
          />
        </div> */}
      </div>
    </div>
  );
}
